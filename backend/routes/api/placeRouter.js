const placeRouter = require('express').Router();

const {
  Place,
  Photo,
} = require('../../db/models');

placeRouter.get('/:id', async (req, res) => {
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
    // res.send(places)
    // console.log(places)
    res.send(places);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = placeRouter;