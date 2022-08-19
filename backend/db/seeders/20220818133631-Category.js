module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Сноборд',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
      {
        title: 'Сноборд',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
      {
        title: 'Сноборд',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
      {
        title: 'Кемпинг',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
      {
        title: 'Рафтинг',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
      {
        title: 'Даунхилл',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: '1.jpeg',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
