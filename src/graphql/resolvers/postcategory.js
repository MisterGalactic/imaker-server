// Queries
exports.get_postcategories = async (_, __, { models }) => {
  const postcategories = await models.PostCategory.findAll()
  return postcategories
}

// Association Queries
exports.get_posts_by_postcategory = async (postcategory, _, { models }) => {
  const posts = await models.Post.findAll({ where: { PostCategoryId: postcategory.id } })
  return posts
}
