const router = require('express').Router();

const { User } = require('../../db/models');

router.post('/profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
      raw: true,
    });
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put('/profile', async (req, res) => {
  const {
    id, name, email, city, favorite,
  } = req.body.form;
  // console.log(name, email, city, favorite);
  const updatedUser = await User.update(
    {
      user_name: name, email, city, favorite,
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
