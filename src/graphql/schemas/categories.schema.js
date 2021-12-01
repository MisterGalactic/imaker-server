module.exports = `
  type Category {
    id: ID!
    name: String!
    item: [Item]
  }

  extend type Query {
    get_categories: [Category]
  }
`
