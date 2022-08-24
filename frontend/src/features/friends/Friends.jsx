/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserSession } from '../main/auth';
import { getSubscribeThunk, selectorFriends } from '../profile/profile';
import { getFriendsThunk } from './friends';
import './Friends.css';

function Friends() {
  const dispatch = useDispatch();
  const { friends } = useSelector(selectorFriends);
  const userSession = useSelector(selectorUserSession);
  const userFriends = userSession && friends && friends.filter((el) => el.user_id === userSession.id && el.status === true);
  useEffect(() => {
    dispatch(getFriendsThunk(),);
  }, [userSession, dispatch]);
  return (
    <div>
      <div>
        <h4> Мои подписки</h4>
      </div>
      <div>
        {
          userFriends && userFriends.map((friend) => (
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
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Friends;
