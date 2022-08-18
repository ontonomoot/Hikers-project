import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from '@geist-ui/core';
import { selectorAuth, booleanAuth } from './auth';

export default function Navbar() {
  const dispatch = useDispatch();

  const auth = useSelector(selectorAuth);

  const handlerModal = () => {
    dispatch(booleanAuth(auth));
  };

  return (
    <nav>
      <button type="button" onClick={handlerModal}>Войти</button>
      <Modal visible={auth} onClose={handlerModal}>
        <Modal.Title>ЭТО МОДАЛКА</Modal.Title>
        <Modal.Action passive onClick={handlerModal}>Cancel</Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>
    </nav>
  );
}
