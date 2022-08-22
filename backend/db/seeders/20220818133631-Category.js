module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Сноубординг',
        description: 'Это сноуборд категория',
        icon: '1.png',
        photo: 'Snowboarding2.jpg',
      },
      {
        title: 'Рафтинг',
        description: 'Это сноуборд категория',
        icon: '2.png',
        photo: 'Rafting1.jpg',
      },
      {
        title: 'Кемпинг',
        description: 'Это сноуборд категория',
        icon: '3.png',
        photo: 'Camping1.jpg',
      },
      {
        title: 'Даунхилл',
        description: 'Это сноуборд категория',
        icon: '4.png',
        photo: 'Downhill1.jpg',
      },
      {
        title: 'Альпинизм',
        description: 'Это сноуборд категория',
        icon: '5.png',
        photo: 'Mountaineering2.jpg',
      },
      {
        title: 'Хайкинг',
        description: 'Это сноуборд категория',
        icon: '6.png',
        photo: 'Hiking1.jpg',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
