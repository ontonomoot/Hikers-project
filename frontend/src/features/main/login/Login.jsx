import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from '@geist-ui/core';
import css from './Login.module.css';
import { selectorAuthLogin, selectorAuthLoginError, authLogin, booleanAuth, errorAuth } from '../auth';

export default function Login() {
  const dispatch = useDispatch();

  const auth = useSelector(selectorAuthLogin);
  const authError = useSelector(selectorAuthLoginError);

  const handlerModal = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    dispatch(authLogin({ email: email.value, password: password.value }));
  };

  return (
    <Modal visible={auth} onClose={() => dispatch(booleanAuth())}>
      <div className={authError ? css.authError : css.auth}>ntrcn</div>
      {authError && <div>Неправильно, долбаеееб</div>}
      <form onSubmit={handlerModal}>
        <input type="email" name="email" onChange={() => dispatch(errorAuth())} />
        <input type="password" name="password" onChange={() => dispatch(errorAuth())} />
        {/* <Modal.Action>Войти</Modal.Action> */}
        <button passive="true" type="submit">Войти</button>
      </form>
    </Modal>
  );
}
