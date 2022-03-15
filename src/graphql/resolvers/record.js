const { Op } = require('sequelize')
const pubsub = require('@/graphql/utils/PubSub')

// Queries
exports.get_records = async (_, __, { models, me }) => {
  const records = await models.Record.findAll({ where: { UserId: me.id } })
  return records
}

// Association Queries
exports.get_user_by_record = async (record, _, { models }) => {
  const user = await models.Record.findAll({ where: { id: record.UserId } })
  return user
}

// exports.won_item_list = async (_, __, { models, me }) => {
//   const wonItem = await models.Item.findAll({
//     where: {
//       bidder: me.id,
//       auctionEnd: {
//         [Op.lt]: Date.now()
//       }
//     }
//   })

//   return wonItem
// }

// Mutations
exports.create_record = async (_, { ItemId, biddingPrice, record }, { models, me }) => {
  try {
    const createdRecord = await models.Record.create({
      ...record,
      UserId: me.id,
      ItemId: ItemId,
      history: [{'time':`${Date.now()}`,'amount':`${biddingPrice}`}],
      status: ''
    })

    return createdRecord
  } catch (err) {
    return err
  }
}

exports.update_record = async (_, { ItemId, biddingPrice }, { models, me }) => {
  try {
    const recordDB = await models.Record.findOne({
      where: {
        ItemId: ItemId,
        UserId: me.id
      }
    })

    if (!recordDB) throw new Error('No record found')

    recordDB.history = [...recordDB.history,{'time':`${Date.now()}`,'amount':`${biddingPrice}`}]
    await recordDB.save()
    return recordDB
  } catch (err) {
    return err
  }
}

// exports.delete_item_by_id = async (_, { ItemId }, { models }) => {
//   try {
//     const destroyed = await models.Item.destroy({ where: { id: ItemId } })
//     if (!destroyed) return false

//     return true
//   } catch (err) {
//     return err
//   }
// }

// exports.place_a_bid = async (_, { ItemId, biddingPrice, lastName, history }, { models, me }) => {
//   try {
//     const itemDB = await models.Item.findOne({ where: { id: ItemId } })
//     if (!itemDB) throw new Error('Item Not Found')
//     if (Date.parse(itemDB.auctionEnd) < Date.now()) throw new Error('Bidding time is over!')
//     if (biddingPrice <= itemDB.minimumBid) throw new Error('Bidding amount is less than minimum bid')

//     itemDB.minimumBid = biddingPrice
//     itemDB.bidder = me.id
//     // itemDB.history = history
//     itemDB.history = [...itemDB.history,{'name':`${lastName}`,'amount':`${biddingPrice}`}]
//     await itemDB.save()

//     pubsub.publish('bidPlaced', { bidPlaced: itemDB })
//     return itemDB
//   } catch (err) {
//     return err
//   }
// }
