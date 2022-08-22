import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '@geist-ui/core';
import Form from 'react-bootstrap/Form';

import { selectorEditProfile, editProfile, getProfileThunk, selectorProfile, addPhotoProfile } from './profile';
import EditProfile from './editProfile/editProfile';
import { editProfileThunk, selectorUserSession } from '../main/auth';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const profileData = useSelector(selectorEditProfile);
  const userSession = useSelector(selectorUserSession);
  const profile = useSelector(selectorProfile);
  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [userSession]);

  const sendFiles = async (e) => {
    try {
      // console.log(pictureData);
      const picturesData = [...e.target.files];
      const data = new FormData();
      picturesData.forEach((img) => {
        data.append('profileImg', img);
      });
      dispatch(addPhotoProfile(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-photo">
        <img src={`/images/${profile.ava}`} alt="img" id="profile-img" />
        <Form.Control type="file" name="photos" onChange={sendFiles} autoComplete="off" />
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
          <div>
            {
              profile && profile.favorite_cat && <h6> {profile.favorite_cat}</h6>
            }
          </div>
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
