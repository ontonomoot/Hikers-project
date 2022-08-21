import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, Card, Text } from '@geist-ui/core';
import css from './Edit.module.css';
import { editProfile, selectorEditProfile } from '../profile';

export default function EditProfile() {
  const dispatch = useDispatch();
  const profileData = useSelector(selectorEditProfile);
  return (
    <Modal visible={profileData} onClose={() => dispatch(editProfile())}>
      <form id={css.form}>
        <input type="text" name="name" placeholder="Введите имя" required />
        <input type="text" name="email" placeholder="Введите почту" required />
        {/* <Modal.Action>Войти</Modal.Action> */}
        <button className={css.button} passive="true" type="submit">Изменить</button>
      </form>
    </Modal>

  );
}
