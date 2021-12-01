const { Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.Items = this.hasMany(models.Item)
    }
  }

  Category.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeCreate: async (instance) => {
        instance.id = uuidv4()
      }
    },
    sequelize,
    modelName: 'Category'
  })
  return Category
}
