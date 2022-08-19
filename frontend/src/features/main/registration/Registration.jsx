import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@geist-ui/core';
import {
  authRegistration,
  booleanAuthReg,
  errorAuthReg,
  selectorAuthReg,
  selectorAuthRegError
} from '../auth';

export default function Registration() {
  const dispatch = useDispatch();

  const auth = useSelector(selectorAuthReg);
  const authError = useSelector(selectorAuthRegError);

  const handlerModal = (event) => {
    event.preventDefault();
    const { login, email, password, password2 } = event.target;

    const form = {
      login: login.value,
      email: email.value,
      password: password.value,
      password2: password2.value,
    };

    dispatch(authRegistration(form));
  };
  return (
    <Modal visible={auth} onClose={() => dispatch(booleanAuthReg())}>
      {authError && <div>Неправильно</div>}
      <form onSubmit={handlerModal}>
        <input type="text" name="login" onChange={() => dispatch(errorAuthReg())} />
        <input type="email" name="email" onChange={() => dispatch(errorAuthReg())} />
        <input type="password" name="password" onChange={() => dispatch(errorAuthReg())} />
        <input type="password" name="password2" onChange={() => dispatch(errorAuthReg())} />
        {/* <Modal.Action>Войти</Modal.Action> */}
        <button passive="true" type="submit">Войти</button>
      </form>
    </Modal>
  );
}
