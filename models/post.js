'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      // 'user' jadi pengganti object saat mengambil relasi ini
      this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
    }

    toJSON() {
      //hide id & userId column when fetched
      return { ...this.get(), id: undefined, userId: undefined }
    }
  }
  Post.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'posts',
      modelName: 'Post',
    }
  )
  return Post
}
