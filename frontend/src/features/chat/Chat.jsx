/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectorUserSession } from '../main/auth';
import { newMessageThunk, selectorChats, selectorChatsWith } from './chatReducer';

export default function Chat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chatNum, setChatNum] = useState(1);

  const { id } = useParams();
  const chats = useSelector(selectorChats);
  const chatsWith = useSelector(selectorChatsWith);
  const userSession = useSelector(selectorUserSession);

  // Все чаты с юзером сессии
  const myChats =
  chatsWith &&
  userSession &&
  chatsWith.filter((el) => el.user_id === userSession.id);

  // Все сообщения по конкрутному чату chatNum
  const chatMes =
  chats &&
  chats.filter((el) => chatNum === el.chat_id);

  // Имя юзера по конкрутному чату chatNum
  const friendName =
  myChats &&
  myChats.find((user) => user.chat_id === chatNum);

  function handleChat(e) {
    e.preventDefault();
    const form = {
      user_id: id,
      friend_id: friendName.friend_id,
      chat_id: chatNum,
      text: e.target.message.value,
    };
    dispatch(newMessageThunk(form));
    e.target.reset();
  }

  return (
    <div>
      <div>Чаты</div>
      <div>
        <div>
          {myChats && myChats.map((user) => (
            <div>{user['User.user_name']}</div>
            )
          )}
        </div>
        <br />
        <div>
          {chatMes && chatMes.map((mas) => (
            <>
              {mas.user_id === userSession.id
              ? <div>{userSession.user_name}</div>
              : <div>{friendName['User.user_name']}</div>}
              <div>{mas.createdAt.slice(0, 10)}</div>
              <div>{mas.text}</div>
              <br />
              <br />
            </>
            )
          )}
        </div>
      </div>
      <form onSubmit={handleChat}>
        <input type="text" name="message" />
        <button type="submit">Отправить</button>
      </form>
      hello
    </div>
  );
}
