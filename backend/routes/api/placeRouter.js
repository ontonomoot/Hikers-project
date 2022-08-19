const placeRouter = require('express').Router();

const {
  Place,
} = require('../../db/models');

placeRouter.get('/:id', async (req, res) => {
  try {
    const places = await Place.findAll({
      where: {
        category_id: req.params.id,
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
