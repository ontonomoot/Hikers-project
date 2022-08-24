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
    {
      place_id: 1,
      title: '/images/snowboard/sheregesh-1.jpg',
    },
    {
      place_id: 1,
      title: '/images/snowboard/sheregesh-2.jpg',
    },
    {
      place_id: 1,
      title: '/images/snowboard/sheregesh-3.jpg',
    }, {
      place_id: 2,
      title: '/images/photo/1.jpeg',
    }, {
      place_id: 3,
      title: '/images/photo/1.jpeg',
    },
    {
      place_id: 4,
      title: '/images/photo/1.jpeg',
    },
    {
      place_id: 5,
      title: '/images/photo/1.jpeg',
    },
    {
      place_id: 6,
      title: '/images/photo/1.jpeg',
    },
    {
      place_id: 7,
      title: '/images/photo/1.jpeg',
    },
    {
      place_id: 8,
      title: '/images/photo/1.jpeg',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
