const router = require('express').Router();

const { User } = require('../../db/models');

router.post('/profile/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
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

module.exports = router;
