import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Card, Text } from '@geist-ui/core';
import css from './Edit.module.css';
import { editProfile, newProfile, selectorEditProfile, selectorProfile } from '../profile';
import { editProfileThunk, selectorUserSession } from '../../main/auth';

export default function EditProfile({ id }) {
  const dispatch = useDispatch();
  const profileData = useSelector(selectorEditProfile);
  const profile = useSelector(selectorProfile);
  const userSession = useSelector(selectorUserSession);

  const handleEdit = (event) => {
    event.preventDefault();
    const { name, email, city, favorite } = event.target;
    const form = {
      id,
      name: name.value,
      email: email.value,
      city: city.value,
      favorite: favorite.value };
      dispatch(editProfileThunk(form));
      dispatch(newProfile(userSession));
      dispatch(editProfile());
  };

  return (
    <Modal visible={profileData} onClose={() => dispatch(editProfile())}>
      <form id={css.form} onSubmit={handleEdit}>
        <p>Имя:</p>
        <input type="text" defaultValue={profile.user_name} name="name" required />
        <p>email:</p>
        <input type="email" defaultValue={profile.email} name="email" required />
        <p>Город:</p>
        <input type="text" defaultValue={profile.city} name="city" required />
        <p>Активность:</p>
        <input type="select" defaultValue={profile.favorite} name="favorite" />
        <button className={css.button} passive="true" type="submit">Изменить</button>
      </form>
    </Modal>

  );
}
