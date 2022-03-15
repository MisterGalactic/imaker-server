const { gql } = require('apollo-server')

module.exports = `
  scalar JSON

  type Record {
    id: String!
    user: User!
    item: Item
    history: JSON
    status: String
  }

  input RecordUpdate {
    history: JSON
    status: String
  }

  extend type Query {
    get_records: Record
  }

  extend type Mutation {
    create_record(ItemId: ID!, biddingPrice: Int, record: RecordUpdate!): Record!
    update_record(ItemId: ID!, biddingPrice: Int, record: RecordUpdate!): Record!
  }
`
