module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        category_id: '1',
        title: 'Тест1',
        description: 'Lorem ipsum',
        geo: '[59.943726528631416,30.360099730159867]',
      },
      {
        category_id: '1',
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '[59.95026039009608,30.31757062401972]',
      },
      {
        category_id: '2',
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '[59.943726528631416,30.360099730159867]',

      },
      {
        category_id: '2',
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '[59.95026039009608,30.31757062401972]',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
