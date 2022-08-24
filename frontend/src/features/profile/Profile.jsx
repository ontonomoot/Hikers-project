/* eslint-disable react-hooks/exhaustive-deps */
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
  getSubscribeThunk, } from './profileSlice';
import EditProfile from './editProfile/editProfile';
import { selectorUserSession } from '../main/auth';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileData = useSelector(selectorEditProfile);
  const userSession = useSelector(selectorUserSession);
  const profile = useSelector(selectorProfile);
  const list = useSelector(selectorFriends);
  // console.log(list, 'list');
  const follow = userSession && list.length && list.filter((el) =>
  (el.user_id === userSession.id && (el.friend_id === Number(id))));
  // console.log(follow, 'follow');
  useEffect(() => {
    // dispatch(getSubscribeThunk());
    dispatch(getProfileThunk(id));
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
                {follow && follow[0].status ?
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
