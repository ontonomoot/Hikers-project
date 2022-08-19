module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        category_id: 1,
        title: 'Тест1',
        description: 'Lorem ipsum',
        geo: '60.09631881459919,29.97108206132501',
      },
      {
        category_id: 1,
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '59.943726528631416,30.360099730159867',
      },
      {
        category_id: 1,
        title: 'Тест3',
        description: 'Lorem ipsum',
        geo: '65.943726528631416,39.360099730159867',
      },
      {
        category_id: 2,
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '60.943726528631416,30.360099730159867',

      },
      {
        category_id: 2,
        title: 'Тест2',
        description: 'Lorem ipsum',
        geo: '65.95026039009608,30.31757062401972',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
