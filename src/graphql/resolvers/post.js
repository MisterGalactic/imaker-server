const { Op } = require('sequelize')
const pubsub = require('@/graphql/utils/PubSub')

// Queries
exports.get_post_by_Id = async (_, { id }, { models }) => {
  const post = await models.Post.findByPk(id)
  return post
}

exports.get_posts = async (_, __, { models }) => {
  const posts = await models.Post.findAll()
  return posts
}

exports.won_post_list = async (_, __, { models, me }) => {
  const wonPost = await models.Post.findAll({
    where: {
      bidder: me.id,
      auctionEnd: {
        [Op.lt]: Date.now()
      }
    }
  })

  return wonPost
}

// Association Queries
exports.get_user_by_post = async (post, _, { models }) => {
  const user = await models.User.findOne({ where: { id: post.UserId } })
  return user
}

exports.get_postcategory_by_Post = async (post, _, { models }) => {
  const user = await models.PostCategory.findOne({ where: { id: post.PostCategoryId } })
  return user
}

// Mutations
exports.create_post = async (_, { post }, { models, me }) => {
  try {
    const createdPost = await models.Post.create({
      ...post,
      minimumBid: post.minPrice + 1,
      auctionStart: Date.parse(post.auctionStart),
      auctionEnd: Date.parse(post.auctionEnd),
      UserId: me.id
    })

    return createdPost
  } catch (err) {
    return err
  }
}

exports.update_post = async (_, { PostId, post }, { models }) => {
  try {
    const postDB = await models.Post.findOne({ where: { id: PostId } })
    if (!postDB) throw new Error('No post found')

    await postDB.update(post)
    await postDB.reload()
    return postDB
  } catch (err) {
    return err
  }
}

exports.delete_post_by_id = async (_, { PostId }, { models }) => {
  try {
    const destroyed = await models.Post.destroy({ where: { id: PostId } })
    if (!destroyed) return false

    return true
  } catch (err) {
    return err
  }
}
