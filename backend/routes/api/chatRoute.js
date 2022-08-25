/* eslint-disable camelcase */
const chatRoute = require('express').Router();

const { Chat, User, ChatNumber } = require('../../db/models');

chatRoute.get('/allchat', async (req, res) => {
  const chats = await Chat.findAll({
    raw: true,
    order: [['createdAt', 'DESC']],
  });
  const chatsWith = await ChatNumber.findAll({
    include: {
      model: User,
    },
    raw: true,
    order: [['createdAt', 'ASC']],
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

  const chats = await Chat.findAll({
    raw: true,
    order: [['createdAt', 'DESC']],
  });

  const chatsWith = await ChatNumber.findAll({
    raw: true,
    include: {
      model: User,
    },
    order: [['createdAt', 'ASC']],
  });
  res.json({ chats, chatsWith });
});

chatRoute.post('/newChat', async (req, res) => {
  const {
    user_id,
    friend_id,
  } = req.body.user;

  const newChat = await ChatNumber.findOne({
    where: { user_id, friend_id },
    raw: true,
  });

  if (!newChat) {
    const chatsWith = await ChatNumber.findAll({
      raw: true,
    });

    await ChatNumber.create({
      user_id,
      friend_id,
      chat_id: chatsWith.length + 1,
    });

    await ChatNumber.create({
      user_id: friend_id,
      friend_id: user_id,
      chat_id: chatsWith.length + 1,
    });
  }

  const chats = await Chat.findAll({
    raw: true,
    order: [['createdAt', 'DESC']],
  });

  const chatsWith = await ChatNumber.findAll({
    raw: true,
    include: {
      model: User,
    },
    order: [['createdAt', 'ASC']],
  });
  res.json({ chats, chatsWith });
});

module.exports = chatRoute;
