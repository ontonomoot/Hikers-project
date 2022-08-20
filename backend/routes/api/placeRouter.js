const placeRouter = require('express').Router();

const {
  Place,
  Photo,
} = require('../../db/models');

placeRouter.get('/places/:id', async (req, res) => {
  try {
    const places = await Place.findAll({
      where: {
        category_id: req.params.id,
      },
      include: { model: Photo },
      raw: true,
    });
    console.log(places);
    res.send(places);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = placeRouter;
