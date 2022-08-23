module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      review_id: 1,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    }, {
      review_id: 2,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    }, {
      review_id: 3,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    {
      review_id: 4,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    {
      review_id: 5,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    {
      review_id: 6,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    {
      review_id: 7,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    {
      review_id: 8,
      title: '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
