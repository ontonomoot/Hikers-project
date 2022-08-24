/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserSession } from '../main/auth';
import { getSubscribeThunk, selectorFriends } from '../profile/profile';
import { getFriendsThunk } from './friends';
import './Friends.css';

function Subscribers() {
  const dispatch = useDispatch();
  const { friends, users } = useSelector(selectorFriends);
  const userSession = useSelector(selectorUserSession);
  const userSubscribers = userSession && friends && friends.filter((el) => el.friend_id === userSession.id && el.status === true);
  const subscribersId = userSession && friends && userSubscribers.map((opt) => opt.user_id);
  // console.log(userSubscribers, 'мои подписчики');
  // console.log(subscribersId, 'мои подписчики ID');
  // console.log(users, 'все юзеры');
  const subscribers = [];
  const mySubscribers = userSession && friends && subscribersId.forEach((el) => {
    const filter = users.find((user) => user.id === el);
    subscribers.push(filter);
  });
  // console.log(subscribers, 'мои подписчики');
  useEffect(() => {
    dispatch(getFriendsThunk(),);
  }, [userSession, dispatch]);
  return (
    <div>
      <div>
        <h4> Мои подписчики</h4>
      </div>
      <div>
        {
          subscribers && subscribers.map((friend) => (
            <div key={friend.id} className="friend">
              <div>
                <img src={`${friend['User.user_ava']}`} alt="img" />
              </div>
              <div>
                {friend.user_name}
              </div>
              <div>
                {friend.city}
              </div>
              <div>
                {friend.email}
              </div>
              <div>
                {friend.link}
              </div>
              <div>
                {friend.favorite_cat}
              </div>
              <div>
                {friend.email}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Subscribers;
