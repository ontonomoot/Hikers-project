const categoryRouter = require('express').Router();

const {
  Category,
} = require('../../db/models');

categoryRouter.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({
      raw: true,
    });
    // res.send(places)
    console.log('категории сервер', categories)
    res.send(categories);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = categoryRouter;
