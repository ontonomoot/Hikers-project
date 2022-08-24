module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Chats', [{
      user_id: 1,
      friend_id: 2,
      chat_id: 1,
      text: 'hi bro',
    },
    {
      user_id: 1,
      friend_id: 3,
      chat_id: 2,
      text: 'yo bro',
    },
    {
      user_id: 2,
      friend_id: 1,
      chat_id: 1,
      text: 'chao bro',
    },
    {
      user_id: 1,
      friend_id: 2,
      chat_id: 1,
      text: 'hi bro',
    },
    {
      user_id: 3,
      friend_id: 1,
      chat_id: 2,
      text: 'yo bro',
    },
    {
      user_id: 1,
      friend_id: 4,
      chat_id: 3,
      text: 'chao bro',
    },
    {
      user_id: 2,
      friend_id: 1,
      chat_id: 1,
      text: 'hi iam user 2',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Chats');
  },
};
