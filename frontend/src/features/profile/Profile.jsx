import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@geist-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectorEditProfile, editProfile, editProfileThunk, selectorProfile } from './profile';
import EditProfile from './editProfile/editProfile';
import { selectorUserSession } from '../main/auth';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileData = useSelector(selectorEditProfile);
  const userSession = useSelector(selectorUserSession);
  const profile = useSelector(selectorProfile);
  console.log(profile);
  // console.log(userSession);
  useEffect(() => {
    dispatch(editProfileThunk(id));
  }, []);
  return (
    <div className="profile-page">
      <div className="profile-photo">
        <img src="/images/categories/profile/1.png" alt="" />
      </div>
      <div className="profile-info">
        <div className="profile-string">
          <h5>name: Homer Simpson</h5>
        </div>
        <div className="profile-string">
          <h6>email: homer@mail.ru</h6>
        </div>
        <div className="profile-string">
          <h6>city: Springfield</h6>
        </div>
        <div className="profile-string">
          <h6>favorite: Drinking beer</h6>
        </div>
        <div className="profile-string">
          <h6>facebook: facebook.com</h6>
        </div>
        { profile && profile.id === userSession.id &&
          <Button type="button" onClick={() => dispatch(editProfile())}>Редактировать</Button>}
      </div>
      {profileData && <EditProfile />}
    </div>
  );
}

export default Profile;
