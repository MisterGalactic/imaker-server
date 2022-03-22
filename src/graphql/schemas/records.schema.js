const { gql } = require('apollo-server')

module.exports = `
  scalar JSON

  type Record {
    id: String!
    user: User!
    item: Item!
    UserId: String
    ItemId: String
    history: JSON
    status: String
    auctionEnd: String
    auctionStart: String
  }

  input RecordUpdate {
    UserId: String
    ItemId: String
    history: JSON
    status: String
  }

  extend type Query {
    get_records: Record
  }

  extend type Mutation {
    create_record(UserId: ID!, ItemId: ID!, biddingPrice: Int, auctionEnd: String, auctionStart: String, record: RecordUpdate!): Record!
    update_record(UserId: ID!, ItemId: ID!, biddingPrice: Int, record: RecordUpdate!): Record!
  }
`
