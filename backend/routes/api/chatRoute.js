/* eslint-disable camelcase */
const chatRoute = require('express').Router();

const { Chat, User, ChatNumber } = require('../../db/models');

chatRoute.get('/allchat', async (req, res) => {
  const chats = await Chat.findAll({ raw: true });
  const chatsWith = await ChatNumber.findAll({
    include: {
      model: User,
    },
    raw: true,
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.json({ chats, chatsWith });
});

chatRoute.post('/newMes', async (req, res) => {
  const {
    user_id,
    chat_id,
    friend_id,
    text,
  } = req.body.form;

  await Chat.create({
    user_id,
    friend_id,
    chat_id,
    text,
  });

  const chats = await Chat.findAll({ raw: true });

  const chatsWith = await ChatNumber.findAll({
    include: {
      model: User,
    },
    raw: true,
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.json({ chats, chatsWith });
});

module.exports = chatRoute;
