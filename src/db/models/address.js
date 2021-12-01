const { Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.User = this.belongsTo(models.User)
    }
  }

  Address.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    firstLineAddress: {
      type: DataTypes.TEXT,
      notEmpty: true
    },
    secondLineAddress: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    postcode: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    country: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    }
  }, {
    hooks: {
      beforeCreate: async (instance) => {
        instance.id = uuidv4()
      }
    },
    sequelize,
    modelName: 'Address'
  })
  return Address
}
