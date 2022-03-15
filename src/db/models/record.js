const { Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    static associate(models) {
      Record.User = this.belongsTo(models.User)
      Record.Item = this.belongsTo(models.Item)
    }
  }

  Record.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    },
    ItemId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    },
    history: {
      type: DataTypes.JSON
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: async (instance) => {
        instance.id = uuidv4()
      }
    },
    sequelize,
    modelName: 'Record'
  })
  return Record
}
