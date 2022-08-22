module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      review_id: 1,
      place_id: 1,
      title: '/images/categories/photo/1.jpeg',
    }, {
      review_id: 2,
      place_id: 2,
      title: '/images/categories/photo/1.jpeg',
    }, {
      review_id: 3,
      place_id: 3,
      title: '/images/categories/photo/1.jpeg',
    },
    {
      review_id: 4,
      place_id: 4,
      title: '/images/categories/photo/1.jpeg',
    },
    {
      review_id: 5,
      place_id: 5,
      title: '/images/categories/photo/1.jpeg',
    },
    {
      review_id: 6,
      place_id: 6,
      title: '/images/categories/photo/1.jpeg',
    },
    {
      review_id: 7,
      place_id: 7,
      title: '/images/categories/photo/1.jpeg',
    },
    {
      review_id: 8,
      place_id: 8,
      title: '/images/categories/photo/1.jpeg',
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
