/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const userSession = useSelector(selectorUserSession);
  const authLogin = useSelector(selectorAuthLogin);
  const authRegistration = useSelector(selectorAuthReg);

  return (
    <div>
      {userSession ? (
        <nav id={css.navbar}>
          <div className={css.left}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >logo
            </div>
          </div>
          <div className={css.navbarCategory}>
            <div
              onClick={() => navigate('/favourites')}
              className={css.navbarCategoryClass}
            >
              Избранное
            </div>
            <div className={css.navbarCategoryClass}>
              Мои подписки
            </div>
            <div className={css.navbarCategoryClass}>
              Мои подписчики
            </div>
            <div
              onClick={() => navigate(`/profile/${userSession.id}/chat`)}
              className={css.navbarCategoryClass}
            >
              Сообщения
            </div>
          </div>
          <div className={css.right}>
            <div
              className={css.userName}
              onClick={() => navigate(`/profile/${userSession.id}`)}
            >Личный кабинет
            </div>
            <button className={css.button} type="button" onClick={() => dispatch(authLogOut())}>Выйти</button>
          </div>
        </nav>
    )
    : (
      <nav id={css.navbar}>
        <div className={css.left}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >logo
          </div>
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
