const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatNumber extends Model {
    static associate(models) {
      // ChatNumber.hasMany(models.Chat, { foreignKey: 'chat_id' });
      ChatNumber.belongsTo(models.User, { foreignKey: 'user_id' });
      ChatNumber.belongsTo(models.User, { foreignKey: 'friend_id' });
    }
  }
  ChatNumber.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    friend_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    chat_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    sequelize,
    modelName: 'ChatNumber',
  });
  return ChatNumber;
};
