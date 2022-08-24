module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ChatNumbers', [{
      chat_id: 1,
      user_id: 1,
      friend_id: 2,
    }, {
      chat_id: 2,
      user_id: 1,
      friend_id: 3,
    }, {
      chat_id: 3,
      user_id: 1,
      friend_id: 4,
    }, {
      chat_id: 1,
      user_id: 2,
      friend_id: 1,
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ChatNumbers');
  },
};
