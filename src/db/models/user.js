const { Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.Items = this.hasMany(models.Item, { onDelete: 'CASCADE' })
      User.Address = this.hasOne(models.Address, { onDelete: 'CASCADE' })
    }

    static async findByLogin(login) {
      const user = await User.findOne({
        where: { email: login }
      })
      return user
    }

    async generatePasswordHash() {
      const password = await bcrypt.hash(this.password, 10)
      return password
    }

    async validatePassword(password) {
      const isValid = await bcrypt.compare(password, this.password)
      return isValid
    }
  }

  User.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    firstName: {
      type: DataTypes.TEXT
    },
    lastName: {
      type: DataTypes.TEXT
    },
    phoneNumber: {
      type: DataTypes.STRING(25),
      validate: {
        isNumeric: true
      }
    }
  }, {
    hooks: {
      beforeCreate: async (instance) => {
        instance.id = uuidv4()
        instance.password = await instance.generatePasswordHash()
      }
    },
    sequelize,
    modelName: 'User'
  })

  return User
}
