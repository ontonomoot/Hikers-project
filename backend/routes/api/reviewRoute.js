const router = require('express').Router();

const { Review, User, Photo } = require('../../db/models');

router
  .get('/place/:id/review', async (req, res) => {
    const { id } = req.params;
    try {
      const review = await Review.findAll({
        raw: true,
        where: { place_id: id },
        include: [{ model: User }, { model: Photo }],
        order: [['createdAt', 'DESC']],
      });
      res.json(review);
    } catch (error) {
      res.status(404).json(error);
    }
  })
  .post('/place/:id/review', async (req, res) => {
    const {
      placeId,
      title,
      description,
      date,
      rating,
    } = req.body.valueForm;

    const userId = req.session.user.id;
    const newReview = await Review.create({
      title,
      description,
      date,
      rating,
      user_id: userId,
      place_id: placeId,
    });
    const review = await Review.findOne({
      raw: true,
      where: { id: newReview.id },
      include: [{ model: User }, { model: Photo }],
    });
    res.json(review);
  });

module.exports = router;
