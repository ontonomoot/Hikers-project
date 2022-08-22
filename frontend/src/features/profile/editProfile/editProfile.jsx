import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Select } from '@geist-ui/core';
import Form from 'react-bootstrap/Form';
import css from './Edit.module.css';
import { editProfile, newProfile, selectorEditProfile, selectorProfile } from '../profile';
import { editProfileThunk, selectorUserSession } from '../../main/auth';

export default function EditProfile({ id }) {
  const dispatch = useDispatch();
  const profileData = useSelector(selectorEditProfile);
  const profile = useSelector(selectorProfile);
  const userSession = useSelector(selectorUserSession);
  const handleEdit = async (event) => {
    event.preventDefault();
    const { name, email, city, favorite, link } = event.target;
    const form = {
      id,
      name: name.value,
      email: email.value,
      city: city.value,
      favorite: favorite.value,
      link: link.value
    };
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
        <Form.Select name="favorite" aria-label="Default select example">
          <option>{profile.favorite_cat}</option>
          <option value="Сноуборд">Сноуборд</option>
          <option value="Рафтинг">Рафтинг</option>
          <option value="Кемпинг">Кемпинг</option>
          <option value="Альпинизм">Альпинизм</option>
          <option value="Хайкинг">Хайкинг</option>
          <option value="Даунхилл">Даунхилл</option>
        </Form.Select>
        {/* <input type="text" defaultValue={profile.favorite_cat} name="favorite" /> */}
        <p>Соцсеть:</p>
        <input type="select" defaultValue={profile.link} name="link" />
        <button className={css.button} passive="true" type="submit">Изменить</button>
      </form>
    </Modal>

  );
}
