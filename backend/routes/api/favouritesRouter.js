const router = require('express').Router();

const {
  Photo,
  Place,
  Favorite,
} = require('../../db/models');

router.route('/favourites')
  .get(async (req, res) => {
    const userId = req.session.user.id;

    try {
      const fav = await Favorite.findAll({
        raw: true,
        where: {
          user_id: userId,
        },
      });

      const places = await Place.findAll({
        include: {
          model: Photo,
        },
        raw: true,
      });

      const favPlaces = fav.map((fav) => places.filter((place) => place.id === fav.place_id))
        .flat();

      res.json(favPlaces);
    } catch (error) {
      res.status(404).json(error);
    }
  }).delete(async (req, res) => {
    try {
      const userId = req.session.user.id;

      const {
        id,
      } = req.body.placeID;

      const fav = await Favorite.destroy({
        raw: true,
        where: {
          user_id: userId,
          place_id: id,
        },
      });

      const changedFavPlaces = await Favorite.findAll({
        raw: true,
        where: {
          user_id: userId,
        },
      });

      res.json(changedFavPlaces);
    } catch (error) {
      res.status(404).json(error);
    }
  });

module.exports = router;
