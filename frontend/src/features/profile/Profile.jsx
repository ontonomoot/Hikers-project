import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '@geist-ui/core';

import { selectorEditProfile, editProfile, getProfileThunk, selectorProfile } from './profile';
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
  return (
    <div className="profile-page">
      <div className="profile-photo">
        <img src="/images/categories/profile/1.png" alt="" />
        {/* <UploadButton uploader={uploader} />
        <button type="submit">
          Upload a file
        </button> */}
        {/* <input type="file" onChange={uploadFile} /> */}
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
