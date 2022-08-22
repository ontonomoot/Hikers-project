import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@geist-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectorEditProfile, editProfile, getProfileThunk, selectorProfile } from './profile';
import EditProfile from './editProfile/editProfile';
import { selectorUserSession } from '../main/auth';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id', id);
  const profileData = useSelector(selectorEditProfile);
  const userSession = useSelector(selectorUserSession);
  const profile = useSelector(selectorProfile);

  console.log(profile);
  console.log(userSession, 'session');
  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [userSession]);
  return (
    <div className="profile-page">
      <div className="profile-photo">
        <img src="/images/categories/profile/1.png" alt="" />
      </div>
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
          {
            profile && profile.favorite && <h6> {profile.favorite}</h6>
          }
        </div>
        <div className="profile-string">
          {profile && <h6>{profile.link}</h6>}
        </div>
        {profile && userSession && profile.id === userSession.id &&
          <Button type="button" onClick={() => dispatch(editProfile())}>Редактировать</Button>}
      </div>
      {profileData && <EditProfile id={id} />}
    </div>
  );
}

export default Profile;
