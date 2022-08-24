const router = require('express').Router();
const { Task } = require('../../db/models');

router
  .get('/place/:id/tasks', async (req, res) => {
    const { id } = req.params;
    console.log('id', Number(id));
    const userId = req.session.user.id;
    console.log('user', userId);
    try {
      const tasks = await Task.findAll({
        raw: true,
        where: { place_id: Number(id), user_id: userId },
        order: [['createdAt', 'ASC']],
      });
      console.log(tasks, 'taaaasksssssss');
      res.json(tasks);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
