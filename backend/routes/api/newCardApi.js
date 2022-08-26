const newCardApi = require('express').Router();

const { Place } = require('../../db/models');

newCardApi.post('/newcard', async (req, res) => {
  const {
    title, categoryid, description, geo,
  } = req.body.form;
  await Place.create({
    title,
    category_id: categoryid,
    description,
    geo,
  });
});

module.exports = newCardApi;
