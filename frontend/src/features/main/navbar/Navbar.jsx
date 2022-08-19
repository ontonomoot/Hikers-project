import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Navbar.module.css';

import { selectorAuthLogin, booleanAuth } from '../auth';
import Login from '../login/Login';

export default function Navbar() {
  const dispatch = useDispatch();

  const authLogin = useSelector(selectorAuthLogin);

  const handlerModal = () => {
    dispatch(booleanAuth(authLogin));
  };

  return (
    <nav className={css.navbar}>
      <button type="button" onClick={handlerModal}>Войти</button>
      {authLogin && <Login />}
    </nav>
  );
}
