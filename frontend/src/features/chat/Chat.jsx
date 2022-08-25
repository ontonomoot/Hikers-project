/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectorUserSession } from '../main/authSlice';
import { newMessageThunk, selectorChats, selectorChatsWith } from './chatSlice';

import css from './Chat.module.css';

export default function Chat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [chatNum, setChatNum] = useState(null);

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
    <div
      style={{
      position: 'relative',
      minHeight: '83vh',
      maxHeight: '100%',
      marginBottom: '100px'
      }}
      id={css.conteiner}
    >
      <div className={css.mainPage}>
        <div className={css.mainPageChats}>
          <div className={css.mainPageChatsChat}>
            Чаты
          </div>
          <div className={css.mainChats}>
            {myChats && myChats.map((user) => (
              <button
                className={user.chat_id === chatNum
                  ? css.mainChatsButtonTake
                  : css.mainChatsButton}
                onClick={() => setChatNum(user.chat_id)}
                type="button"
                key={`chatButtonKey${user.id}`}
              >{user['User.user_name']}
              </button>
            )
            )}
          </div>
        </div>
        <div className={css.mainPageMessage}>
          <div className={css.mainPageChatsMes}>
            Сообщения
          </div>
          <div className={chatNum && css.messagePage}>
            {chatMes && chatMes.map((mas) => (
              <div
                key={`allCatMap${mas.id}`}
                className={mas.user_id === userSession.id
                  ? css.messageAllCardRight
                  : css.messageAllCardLeft}
              >
                <div
                  className={mas.user_id === userSession.id
                    ? css.messageAllRight
                    : css.messageAllLeft}
                >
                  <div className={css.divAvaProfLeft}>
                    {mas.user_id !== userSession.id
                      && <img className={css.avaProfLeft} src={friendName['User.ava']} alt="" />}
                  </div>
                  <div>
                    {mas.user_id === userSession.id
                      ? (
                        <div
                          className={css.messageNameRight}
                        >{userSession.user_name}
                        </div>
                      )
                      : (
                        <div
                          className={css.messageNameLeft}
                        >{friendName['User.user_name']}
                        </div>
                      )}
                    {mas.user_id === userSession.id
                      ? (
                        <>
                          <div
                            className={css.messageDataRight}
                          >
                            {mas.createdAt.slice(0, 10)}
                          </div>
                          <div
                            className={css.messageTextRight}
                          >
                            {mas.text}
                          </div>
                        </>
                      )
                      : (
                        <>
                          <div
                            className={css.messageDataLeft}
                          >
                            {mas.createdAt.slice(0, 10)}
                          </div>
                          <div
                            className={css.messageTextLeft}
                          >{mas.text}
                          </div>
                        </>
                      )}
                  </div>
                  <div className={css.divAvaProfRight}>
                    {mas.user_id === userSession.id
                      && <img className={css.avaProfRight} src={friendName['User.ava']} alt="" />}
                  </div>
                </div>
              </div>
            )
            )}
          </div>
          <div className={css.luboy} />
          {chatMes && chatNum ? (
            <form
              className={css.mainWriteChat}
              onSubmit={handleChat}
            >
              <input
                placeholder="Введите сообщение"
                className={css.inputForm}
                type="text"
                name="message"
              />
              <button
                className={css.buttonForm}
                type="submit"
              >Отправить
              </button>
            </form>
            )
          : <div>Выберите чат или напишите другу, чтобы начать беседу</div>}
        </div>
      </div>
    </div>
  );
}
