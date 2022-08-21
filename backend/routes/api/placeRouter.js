const placeRouter = require('express').Router();

const {
  Place,
  Photo,
  Review,
} = require('../../db/models');

placeRouter.get('/places/:id', async (req, res) => {
  try {
    const places = await Place.findAll({
      where: {
        category_id: req.params.id,
      },
      include: {
        model: Photo,
      },
      raw: true,
    });

    const reviews = await Review.findAll({
      raw: true,
    });

    places.forEach(async (place) => {
      const placeRew = reviews.filter((review) => review.place_id === place.id);
      const average = Math.floor(
        placeRew.reduce((acc, el) => el.rating + acc, 0) / placeRew.length,
      );
      await Place.update({
        rating: average,
      }, {
        where: {
          id: place.id,
        },
        returning: true,
        raw: true,
      });
    });

    const newPlaces = await Place.findAll({
      where: {
        category_id: req.params.id,
      },
      include: {
        model: Photo,
      },
      order: [
        ['rating', 'DESC'],
      ],
      raw: true,
    });

    // console.log(newPlaces);
    res.send(newPlaces);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = placeRouter;