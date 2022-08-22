const router = require('express').Router();
const storageFileUpload = require('../../middleware/storageFileUpload');

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
    try {
      const {
        placeId,
        title,
        description,
        date,
        rating,
        photo,
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
      const newPhoto = await Promise.all(
        // eslint-disable-next-line no-return-await
        photo.map(async (el) => await Photo.create({
          review_id: newReview.id,
          title: el,
        })),
      );

      const review = await Review.findOne({
        raw: true,
        where: { id: newReview.id },
        include: [{ model: User }, { model: Photo }],
      });
      res.json(review);
    } catch (err) {
      console.log(err);
    }
  })
  .post('/place/photo', async (req, res) => {
    try {
      const photos = req.files.homesImg;
      const arrUrl = await Promise.all(
        photos.map(async (el) => await storageFileUpload(el)),
      );
      res.json(arrUrl);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
