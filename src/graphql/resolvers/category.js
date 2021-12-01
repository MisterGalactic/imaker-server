// Queries
exports.get_categories = async (_, __, { models }) => {
  const categories = await models.Category.findAll()
  return categories
}

// Association Queries
exports.get_items_by_category = async (category, _, { models }) => {
  const items = await models.Item.findAll({ where: { CategoryId: category.id } })
  return items
}
