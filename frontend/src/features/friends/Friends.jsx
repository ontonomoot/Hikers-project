/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Modal } from '@geist-ui/core';
import { selectorUserSession } from '../main/authSlice';
import { getSubscribeThunk } from '../profile/profileSlice';
import { getFriendsThunk, unSubscribeThunk, selectorFriends } from './friendsSlice';

import './Friends.css';

function Friends() {
  const [state, setState] = useState(false);
//   const handler = () => setState(true);
//   const closeHandler = (event) => {
//   setState(false);
// };

  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const allFr = useSelector(selectorFriends);
  const userSession = useSelector(selectorUserSession);
  const [userFriends, setUserFriends] = useState();
  console.log(userFriends, 'userFriends');
  // console.log(allFr);
  const ava = 'data:image/jpeg;base64,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';
  // const ava = '/images/review/dc700dec8f50ce55f7ddaa49ac2445a61661255956856.jpg';
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(getSubscribeThunk());
  //     dispatch(getFriendsThunk());
  //     // dispatch(unSubscribeThunk());
  //   }, 50);
  // }, [userSession, dispatch, state]);
  useEffect(() => {
    if (allFr && num === 0) {
   setUserFriends(allFr && allFr.friends.filter((el) => el.user_id === userSession.id && el.status === true));
   setNum(null);
    }
   }, [allFr, num]);
  if (!allFr) return <div>oops</div>;
  if (!userSession) return <div>oops</div>;

  return (
    <div className="friends">
      <div className="friends-title">
        Мои подписки
      </div>
      <div>
        {
          // userSession && allFr && allFr.friends && allFr.friends.length && allFr.friends.map((friend) => (friend.user_id === userSession.id && friend.status === true) &&
          allFr && userFriends && userFriends.map((friend) => (
            <div key={friend.id} className="friend">
              <div>
                <img src={`/images/${friend['User.ava']}`} alt="img" id="ava-img" />
                {/* <img src={ava} alt="img" id="ava-img" /> */}
                {/* <img src={ava} alt="img" /> */}
              </div>
              <div className="info-btn">
                <div className="friends-info">
                  <div>
                    {friend['User.user_name']}
                  </div>
                  <div>
                    {friend['User.city']}
                  </div>
                  <div>
                    {friend['User.link']}
                  </div>
                  <div>
                    {friend['User.favorite_cat']}
                  </div>
                  <div>
                    {friend['User.email']}
                  </div>
                </div>
                <div className="btn-group">
                  <div className="friends-btn">
                    <Grid><Button type="success" ghost auto scale={0.7}>Сообщение</Button></Grid>
                    {/* <Button onClick={handler} auto>Отпиться</Button>; */}
                  </div>
                  <div className="friends-btn">
                    <Grid><Button
                      type="secondary"
                      ghost
                      auto
                      scale={0.7}
                      onClick={(e) => {
                      e.preventDefault();
                      dispatch(unSubscribeThunk({ userId: userSession.id, friendId: friend.friend_id }));
                      setState((prev) => !prev);
                      setUserFriends((p) => p.filter((el) => el.id !== friend.id));
                    }}
                    >Отписаться
                          </Button>
                    </Grid>
                    <div>
                      {/* <Modal visible={state} onClose={(e) => closeHandler(e)}>
                        <Modal.Title>Отписаться</Modal.Title>
                        <Modal.Content>
                          <p>Подтвердите действие</p>
                        </Modal.Content>
                        <Modal.Action passive onClick={() => setState(false)}>Отмена</Modal.Action>
                        <Modal.Action onClick={(e) => {
                      // e.preventDefault();
                      dispatch(unSubscribeThunk({ userId: userSession.id, friendId: friend.friend_id }));
                      setState((prev) => !prev);
                      setUserFriends((p) => p.filter((el) => el.id !== friend.id));
                       }}
                        >Подтвердить
                        </Modal.Action>
                      </Modal> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Friends;

//  /images/progile/1.png
