const { Op } = require('sequelize')
const pubsub = require('@/graphql/utils/PubSub')

// Queries
exports.get_item_by_Id = async (_, { id }, { models }) => {
  const item = await models.Item.findByPk(id)
  return item
}

exports.get_items = async (_, __, { models }) => {
  const items = await models.Item.findAll()
  return items
}

exports.won_item_list = async (_, __, { models, me }) => {
  const wonItem = await models.Item.findAll({
    where: {
      bidder: me.id,
      auctionEnd: {
        [Op.lt]: Date.now()
      }
    }
  })

  return wonItem
}

// Association Queries
exports.get_user_by_item = async (item, _, { models }) => {
  const user = await models.User.findOne({ where: { id: item.UserId } })
  return user
}

exports.get_category_by_Item = async (item, _, { models }) => {
  const user = await models.Category.findOne({ where: { id: item.CategoryId } })
  return user
}

// Mutations
exports.create_item = async (_, { item }, { models, me }) => {
  try {
    const createdItem = await models.Item.create({
      ...item,
      minimumBid: item.minPrice + 1,
      auctionEnd: Date.parse(item.auctionEnd),
      UserId: me.id
    })

    return createdItem
  } catch (err) {
    return err
  }
}

exports.update_item = async (_, { ItemId, item }, { models }) => {
  try {
    const itemDB = await models.Item.findOne({ where: { id: ItemId } })
    if (!itemDB) throw new Error('No item found')

    await itemDB.update(item)
    await itemDB.reload()
    return itemDB
  } catch (err) {
    return err
  }
}

exports.delete_item_by_id = async (_, { ItemId }, { models }) => {
  try {
    const destroyed = await models.Item.destroy({ where: { id: ItemId } })
    if (!destroyed) return false

    return true
  } catch (err) {
    return err
  }
}

exports.place_a_bid = async (_, { ItemId, biddingPrice }, { models, me }) => {
  try {
    const itemDB = await models.Item.findOne({ where: { id: ItemId } })
    if (Date.parse(itemDB.auctionEnd) < Date.now()) throw new Error('Bidding time is over!')
    if (biddingPrice <= itemDB.minimumBid) throw new Error('Bidding amount is less than minimum bid')

    itemDB.minimumBid = biddingPrice
    itemDB.bidder = me.id
    await itemDB.save()

    pubsub.publish('bidPlaced', { bidPlaced: itemDB })
    return itemDB
  } catch (err) {
    return err
  }
}
