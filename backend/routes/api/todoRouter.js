const router = require('express').Router();
const { Task } = require('../../db/models');

router
  .get('/place/:id/tasks', async (req, res) => {
    console.log('here');
    const { id } = req.params;
    console.log('id', id);
    const userId = req.session.user.id;
    console.log('user', userId);
    try {
      const tasks = await Task.findAll({
        raw: true,
        where: { user_id: userId, place_id: id },
        order: [['createdAt', 'ASC']],
      });
      res.json(tasks);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
