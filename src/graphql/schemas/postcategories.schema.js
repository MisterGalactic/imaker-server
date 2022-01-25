module.exports = `
  type PostCategory {
    id: ID!
    name: String!
    post: [Post]
  }

  extend type Query {
    get_postcategories: [PostCategory]
  }
`
