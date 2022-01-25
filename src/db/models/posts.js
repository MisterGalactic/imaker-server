const { Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.User = this.belongsTo(models.User)
      Post.PostCategory = this.belongsTo(models.PostCategory)
    }
  }

  Post.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'You must set the Post\'s title.'
        }
      }
    },
    subname: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    picUrl1: {
      type: DataTypes.TEXT
    },
    picUrl2: {
      type: DataTypes.TEXT
    },
    picUrl3: {
      type: DataTypes.TEXT
    },
    auctionStart: {
      type: DataTypes.DATE
    },
    auctionEnd: {
      type: DataTypes.DATE
    },
    minPrice: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        notEmpty: true,
        isDecimal: true
      }
    },
    minimumBid: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        isDecimal: true
      }
    },
    bidder: {
      type: DataTypes.UUID,
      allowNull: true,
      validate: {
        isUUID: 4
      }
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        isUUID: 4
      }
    },
    PostCategoryId: {
      type: DataTypes.UUID,
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
    modelName: 'Post'
  })
  return Post
}
