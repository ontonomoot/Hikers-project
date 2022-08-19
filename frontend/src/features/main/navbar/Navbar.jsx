import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Navbar.module.css';

import {
  selectorAuthLogin,
  booleanAuthLogin,
  authLogOut,
  selectorUserSession,
  auth,
  selectorAuthReg,
  booleanAuthReg
} from '../auth';
import Login from '../login/Login';
import Registration from '../registration/Registration';

export default function Navbar() {
  const dispatch = useDispatch();

  const userSession = useSelector(selectorUserSession);
  const authLogin = useSelector(selectorAuthLogin);
  const authRegistration = useSelector(selectorAuthReg);

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div>
      {!userSession ? (
        <nav className={css.navbar}>
          <button type="button" onClick={() => dispatch(booleanAuthLogin())}>Войти</button>
          {authLogin && <Login />}
        </nav>
    )
    : (
      <nav className={css.navbar}>
        <button type="button" onClick={() => dispatch(booleanAuthLogin())}>Войти</button>
        <button type="button" onClick={() => dispatch(booleanAuthReg())}>Регистрация</button>
        <button type="button" onClick={() => dispatch(authLogOut())}>Выйти</button>
        {authLogin && <Login />}
        {authRegistration && <Registration />}
      </nav>
  )}
    </div>
  );
}
