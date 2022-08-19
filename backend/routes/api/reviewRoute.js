const router = require('express').Router();

const { Review, User, Photo } = require('../../db/models');

router.get('/place/:id/review', async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findAll({
      raw: true,
      where: { place_id: id },
      include: [{ model: User }, { model: Photo }],
      order: [['createdAt', 'ASC']],
    });
    res.json(review);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
