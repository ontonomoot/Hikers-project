/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Modal } from '@geist-ui/core';
import { selectorUserSession } from '../main/auth';
import { getSubscribeThunk } from '../profile/profile';
import { getFriendsThunk, unSubscribeThunk, selectorFriends } from './friends';

import './Friends.css';

function Friends() {
  const [state, setState] = useState(false);
//   const handler = () => setState(true);
//   const closeHandler = (event) => {
//   setState(false);
// };

  const dispatch = useDispatch();
  const allFr = useSelector(selectorFriends);
  const userSession = useSelector(selectorUserSession);
  const userFriends = userSession && allFr && allFr.friends && allFr.friends.length && allFr.friends.filter((el) => el.user_id === userSession.id && el.status === true);
  // console.log(userFriends, 'userFriends');

  useEffect(() => {
    setTimeout(() => {
      dispatch(getSubscribeThunk());
      dispatch(getFriendsThunk());
      // dispatch(unSubscribeThunk());
    }, 50);
  }, [userSession, dispatch, state]);

  if (!allFr) return <div>oops</div>;
  if (!userSession) return <div>oops</div>;

  return (
    <div>
      <div>
        <h4> Мои подписки</h4>
      </div>
      <div>
        {
          userSession && allFr && allFr.friends && allFr.friends.length && allFr.friends.map((friend) => (friend.user_id === userSession.id && friend.status === true) && (
            <div key={friend.id} className="friend">
              <div>
                <img src={`${friend['User.user_ava']}`} alt="img" />
              </div>
              <div>
                {friend['User.user_name']}
              </div>
              <div>
                {friend['User.city']}
              </div>
              <div>
                {friend['User.createdAt']}
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
              <div className="btn-group">
                <div className="friends-btn">
                  <Grid><Button type="success" ghost auto scale={0.7}>Сообщение</Button></Grid>
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
                  }}
                  >Отписаться
                        </Button>
                  </Grid>
                  {/* <Button auto>Отписаться</Button> */}
                  {/* <div>
                    <Modal visible={state} onClose={closeHandler}>
                      <Modal.Title>Отписаться</Modal.Title>
                      <Modal.Content>
                        <p>Подтвердите действие</p>
                      </Modal.Content>
                      <Modal.Action passive onClick={() => setState(false)}>Отмена</Modal.Action>
                      <Modal.Action onClick={() => dispatch(unSubscribeThunk({ userId: userSession.id, friendId: friend.id }))}>Подтвердить</Modal.Action>
                    </Modal>
                  </div> */}
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
