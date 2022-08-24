const friendsRouter = require('express').Router();

const { Friend, User } = require('../../db/models');

friendsRouter.get('/profile/friends', async (req, res) => {
  // console.log('friends route');
  try {
    const friends = await Friend.findAll({ include: { model: User }, raw: true });
    const subscribers = await User.findAll({ include: { model: Friend }, raw: true });
    const users = await User.findAll({ raw: true });
    // console.log(friends, 'friends route');
    // console.log(subscribers, 'route');
    res.json({ friends, subscribers, users });
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = friendsRouter;
