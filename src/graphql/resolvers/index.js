const { combineResolvers } = require('graphql-resolvers')

const { isAuthenticated, isItemOwner, isAddressOwner } = require('@/graphql/resolvers/authorization')
const user = require('@/graphql/resolvers/user')
const item = require('@/graphql/resolvers/item')
const category = require('@/graphql/resolvers/category')
const address = require('@/graphql/resolvers/address')
const pubsub = require('@/graphql/utils/PubSub')

const resolvers = {
  Query: {
    get_address: combineResolvers(isAuthenticated, isAddressOwner, address.get_address),
    get_categories: category.get_categories,
    get_items: item.get_items,
    get_item_by_Id: item.get_item_by_Id,
    won_item_list: combineResolvers(isAuthenticated, item.won_item_list),
    get_user_info: combineResolvers(isAuthenticated, user.get_user_info)
  },
  Address: {
    user: address.get_user_by_address
  },
  Category: {
    item: category.get_items_by_category
  },
  Item: {
    user: item.get_user_by_item,
    category: item.get_category_by_Item
  },
  User: {
    item: user.get_items_by_user,
    address: user.get_address_by_user
  },
  Mutation: {
    create_address: combineResolvers(isAuthenticated, address.create_address),
    update_address: combineResolvers(isAuthenticated, isAddressOwner, address.update_address),
    create_item: combineResolvers(isAuthenticated, item.create_item),
    update_item: combineResolvers(isAuthenticated, isItemOwner, item.update_item),
    delete_item_by_id: combineResolvers(isAuthenticated, isItemOwner, item.delete_item_by_id),
    place_a_bid: combineResolvers(isAuthenticated, item.place_a_bid),
    sign_up: user.sign_up,
    sign_in: user.sign_in,
    update_user: combineResolvers(isAuthenticated, user.update_user)
  },
  Subscription: {
    bidPlaced: {
      subscribe: () => pubsub.asyncIterator(['bidPlaced'])
    }
  }
}

module.exports = resolvers
