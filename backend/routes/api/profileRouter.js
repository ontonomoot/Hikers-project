const router = require('express').Router();
const storageProfileUpload = require('../../middleware/storageProfileUpload');

const { User, Friend } = require('../../db/models');

router.post('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
      raw: true,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});

router.put('/profile', async (req, res) => {
  const {
    id, name, email, city, favorite, link,
  } = req.body.form;
  const updatedUser = await User.update(
    {
      user_name: name,
      email,
      city,
      favorite_cat: favorite,
      link,
    },
    {
      where: { id },
      returning: true,
      raw: true,
    },
  );
  const [, [user]] = updatedUser;
  req.session.user = user;
  res.json(updatedUser[1][0]);
});

// добавление друзей
router.post('/profile', async (req, res) => {
  const { userId, friendId } = req.body;
  try {
    const newFriend = await Friend.create({
      user_id: userId,
      friend_id: friendId,
    });
    console.log(newFriend);
    res.json(newFriend);
  } catch (error) {
    res.status(404).json(error);
  }
  // console.log(userId, friendId, 'friends');
});

// обновление фото user'a
router.put('/profile/photo', async (req, res) => {
  const photos = req.files.profileImg;
  const { id } = req.session.user;
  const url = await Promise.all(await storageProfileUpload(photos));
  const updatedUser = await User.update(
    {
      ava: url.join(''),
    },
    {
      where: { id },
      returning: true,
      raw: true,
    },
  );
  const [, [user]] = updatedUser;
  req.session.user = user;
  res.json(updatedUser[1][0]);
});

module.exports = router;
