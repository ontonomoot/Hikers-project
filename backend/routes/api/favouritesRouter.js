const router = require('express').Router();

const {
  User,
  Photo,
  Place,
  Favorite,
} = require('../../db/models');

router
  .get('/favourites', async (req, res) => {
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
      console.log(error);
      // res.status(404).json(error);
    }
  });

module.exports = router;