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

      await Favorite.destroy({
        raw: true,
        where: {
          user_id: userId,
          place_id: id,
        },
      });

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

      const changedFavPlaces = fav.map((fav) => places.filter((place) => place.id === fav.place_id))
        .flat();

      res.json(changedFavPlaces);
    } catch (error) {
      res.status(404).json(error);
    }
  }).post(async (req, res) => {
    const userId = req.session.user.id;
    const {
      placeid,
    } = req.body;

    try {
      const favorite = await Favorite.findOne({
        where: {
          user_id: userId,
          place_id: placeid,
        },
        raw: true,
      });
      // console.log('fav1', favorite)

      // если нет в избранном
      if (!favorite) {
        // console.log('ne favorite');
        await Favorite.create({
          user_id: userId,
          place_id: placeid,
        });
        const favorites = await Favorite.findAll({
          raw: true,
        });
        // console.log('fav2', favorites)
        return res.json(favorites);
      }

      // если есть в избранном меняем статус на false
      // иначе статус true
      if (favorite.status) {
        await Favorite.update({
          status: false,
        }, {
          where: {
            user_id: userId,
            place_id: placeid,

          },
        });
        const favorites = await Favorite.findAll();
        res.json(favorites);
      } else {
        await Favorite.update({
          status: true,
        }, {
          where: {
            user_id: userId,
            place_id: placeid,
          },
        });
        const favorites = await Favorite.findAll();
        res.json(favorites);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  });

// .post(async (req, res) => {
//   const userId = req.session.user.id;

//   const {
//     placeid,
//   } = req.body;
//   // console.log(placeid)

//   // console.log(favPlaceID);
//   const checkFav = await Favorite.findOne({
//     where: {
//       user_id: userId,
//       place_id: placeid,
//     },
//     raw: true,
//   });

//   // console.log(checkFav)

//   if (!checkFav) {
//     console.log('test')
//     await Favorite.create({
//       user_id: userId,
//       place_id: placeid,
//     });
//     res.json({
//       message: 'Успешно',
//     });
//   } else {
//     res.json({
//       message: 'Вы уже добавили в избранное',
//     });
//   }
// });

module.exports = router;