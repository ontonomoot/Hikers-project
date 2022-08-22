import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Breadcrumbs } from '@geist-ui/core';
import css from './Navbar.module.css';
import {
  selectorAuthLogin,
  booleanAuthLogin,
  authLogOut,
  selectorUserSession,
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

  return (
    <div>
      {userSession ? (
        <nav id={css.navbar}>
          <div className={css.left}>
            <div>logo</div>
          </div>
          <div className={css.right}>
            <button className={css.button} type="button" onClick={() => dispatch(authLogOut())}>Выйти</button>
          </div>
        </nav>
    )
    : (
      <nav id={css.navbar}>
        <div className={css.left}>
          <div>logo</div>
        </div>
        <div className={css.marqueeAll}>
          <p className={css.marquee}>
            {' '}СНОУБОРД - РАФТИНГ - КЕМПИНГ - ДАУНХИЛЛ - АЛЬПИНИЗМ - ХАЙКИНГ
          </p>
        </div>
        <div className={css.right}>
          <button className={css.button} type="button" onClick={() => dispatch(booleanAuthLogin())}>Войти</button>
          <button className={css.button} type="button" onClick={() => dispatch(booleanAuthReg())}>Регистрация</button>
          {authLogin && <Login />}
          {authRegistration && <Registration />}
        </div>
      </nav>
  )}
    </div>
  );
}
