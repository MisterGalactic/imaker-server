const { gql } = require('apollo-server-express')

const usersSchema = require('@/graphql/schemas/users.schema')
const itemsSchema = require('@/graphql/schemas/items.schema')
const categoriesSchema = require('@/graphql/schemas/categories.schema')
const addressesSchema = require('@/graphql/schemas/addresses.schema')
const subscriptionSchema = require('@/graphql/schemas/subscription.schema')

module.exports = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
  ${usersSchema}
  ${itemsSchema}
  ${categoriesSchema}
  ${addressesSchema}
  ${subscriptionSchema}
`
