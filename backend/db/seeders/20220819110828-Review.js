module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Reviews', [{
      place_id: 1,
      user_id: 1,
      title: 'очень клевое место',
      description: 'ездил на прошлых выходных, очень круто покатался',
      date: '2022-08-13',
      rating: 5,
    }, {
      place_id: 2,
      user_id: 1,
      title: 'место норм',
      description: 'ездил на прошлых выходных, с погодой не подфартило',
      date: '2022-08-14',
      rating: 4,
    }, {
      place_id: 3,
      user_id: 4,
      title: 'сойдет',
      description: 'ничо так',
      date: '2022-08-19',
      rating: 5,
    }, {
      place_id: 6,
      user_id: 2,
      title: 'сойдет',
      description: 'ничо так',
      date: '2022-08-19',
      rating: 3,
    }, {
      place_id: 5,
      user_id: 4,
      title: 'норм',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 4,
    }, {
      place_id: 4,
      user_id: 3,
      title: 'класс',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 5,
    }, {
      place_id: 3,
      user_id: 4,
      title: 'сойдет',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 3,
    }, {
      place_id: 6,
      user_id: 3,
      title: 'норм',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 5,
    }, {
      place_id: 2,
      user_id: 1,
      title: 'норм',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 4,
    }, {
      place_id: 2,
      user_id: 2,
      title: 'не понравилось',
      description: 'just some text about this place',
      date: '2022-08-19',
      rating: 1,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
