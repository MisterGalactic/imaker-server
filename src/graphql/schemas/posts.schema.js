module.exports = `
  type Post {
    id: String!
    name: String!
    subname: String
    color: String
    description: String
    minPrice: Int!
    picUrl1: String
    picUrl2: String
    picUrl3: String
    auctionStart: String!
    auctionEnd: String!
    minimumBid: Int
    bidder: ID
    user: User!
    postcategory: PostCategory
  }

  input PostUpdate {
    name: String!
    subname: String
    color: String
    description: String
    minPrice: Int!
    picUrl1: String
    picUrl2: String
    picUrl3: String
    auctionStart: String
    auctionEnd: String
    PostCategoryId: ID
  }

  extend type Query {
    get_post_by_Id(id: ID!): Post
    get_posts: [Post]
    won_post_list: [Post]
  }

  extend type Mutation {
    create_post(post: PostUpdate!): Post!
    delete_post_by_id(PostId: ID!): Boolean!
    update_post(PostId: ID!, post: PostUpdate!): Post!
  }
`
