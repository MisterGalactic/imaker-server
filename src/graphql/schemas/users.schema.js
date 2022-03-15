// TODO PASSWORD FIELDS TO BE REMOVED

module.exports = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    credit: Int
    email: String!
    phoneNumber: String
    item: [Item!]
    address: Address
  }

  type Token {
    token: String!
  }

  input UserUpdate {
    firstName: String
    lastName: String
    password: String!
    email: String!
    phoneNumber: String
    id: String
  }

  extend type Query {
    get_user_info: User
  }

  extend type Mutation {
    sign_up(user: UserUpdate!): Token!
    sign_in(email: String!, password: String!): Token!
    update_user(user: UserUpdate!): User!
    buy_credit(UserId: ID!, credit: Int): User
  }
`
