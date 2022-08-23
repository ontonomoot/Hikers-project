import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@geist-ui/core';

import { selectorEditProfile,
  editProfile,
  getProfileThunk,
  selectorProfile,
  subscribeThunk,
  selectorFriends,
  getSubscribeThunk } from './profile';
import EditProfile from './editProfile/editProfile';
import { selectorUserSession } from '../main/auth';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileData = useSelector(selectorEditProfile);
  const userSession = useSelector(selectorUserSession);
  const profile = useSelector(selectorProfile);
  const friends = useSelector(selectorFriends);
  console.log(friends, 'подписчики в компоненте');

  console.log();

  const follow = userSession && friends && friends.filter((el) => (el.user_id === userSession.id))
  .filter((el) => el.friend_id === Number(id))[0];
  // console.log('useparams', id);
  console.log('follow', follow);
  // console.log('follow[0].user_id', follow[0].user_id);
  // console.log('follow[0].friend_id', follow[0].friend_id);
  // const subscriber = userSession && follow.filter((el) => el.friend_id === Number(id));
    // console.log('subscriber', subscriber);

  // console.log(friends, 'friends');
  // console.log(id, 'params');
  // console.log(userSession, 'session');
  useEffect(() => {
    dispatch(getProfileThunk(id));
    dispatch(getSubscribeThunk());
  }, [userSession, id]);

  if (!userSession) return <div>oops</div>;

  return (
    <div className="profile-page">
      <div className="profile-photo">
        <img src={`/images/${profile.ava}`} alt="img" id="profile-img" />
        {/* <Form.Control type="file" name="photos" onChange={sendFiles} autoComplete="off" /> */}
      </div>
      <div className="profile-block-btn">
        <div className="profile-info">
          {profile && (
          <div className="profile-string">
            <h5>{profile.user_name}</h5>
          </div>
          )}
          {profile && (
          <div className="profile-string">
            <h6>email: {profile.email}</h6>
          </div>
          )}
          {profile && (
          <div className="profile-string">
            <h6>Город: {profile.city}</h6>
          </div>
          )}
          <div className="profile-string">
            <h6>Активность:</h6>
            <div>
              {
              profile && profile.favorite_cat && <h6> {profile.favorite_cat}</h6>
            }
            </div>
          </div>
          <div className="profile-string">
            {profile && <h6>{profile.link}</h6>}
          </div>
          <div className="profile-edit-btn" />
        </div>
        <div className="edit-btn">
          {profile && userSession && (profile.id === userSession.id) ?
            <Button type="button" onClick={() => dispatch(editProfile())}>Редактировать</Button> : (
              <Button type="button" onClick={() => dispatch(subscribeThunk({ userId: userSession.id, friendId: profile.id }))}>
                {follow && follow.status ?
                  <>Отписаться</>
                : <>Подписаться</>}
              </Button>
          )}
        </div>
      </div>
      {profileData && <EditProfile id={id} />}
    </div>
  );
}

export default Profile;
