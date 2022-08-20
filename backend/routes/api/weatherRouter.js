const weatherRouter = require('express').Router();

const { Place } = require('../../db/models');

weatherRouter.get('/weather/:id', async (req, res) => {
  const { id } = req.params;
  console.log('22222');
  try {
    const places = await Place.findAll({ where: { id }, raw: true });
    console.log(places);
  } catch (error) {
    console.log(error);
  }
});

module.exports = weatherRouter;
