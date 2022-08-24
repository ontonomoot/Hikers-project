/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonDropdown } from '@geist-ui/core';
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
import { selectorCategories } from '../mainPage';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = window.location.href.slice(-13);

  const userSession = useSelector(selectorUserSession);
  const authLogin = useSelector(selectorAuthLogin);
  const authRegistration = useSelector(selectorAuthReg);
  const categories = useSelector(selectorCategories);

  const [getCat, setGetCat] = useState(null);

  useEffect(() => {
    const id = window.location.href.slice(-1);
    if (url === `/categories/${Number(id)}`) setGetCat(Number(id));
  }, [url]);

  if (!categories) return <div>Loading...</div>;

  return (
    <div>
      {userSession ? (
        <nav id={css.navbar}>
          <div className={css.left}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setGetCat(null);
                navigate('/');
              }}
            >logo
            </div>
          </div>
          <div className={css.categoryMain}>
            {categories.map((icon, i) => (
              <img
                id={icon.id}
                key={`mainPhotoImgIcon${icon.id}`}
                onClick={(e) => {
                  setGetCat(Number(e.target.id));
                  navigate(`/categories/${Number(e.target.id)}`);
                }}
                className={url !== `/categories/${icon.id}`
                ? css.iconCategory
                : icon.id === getCat
                ? `${css.iconCategory} ${css.iconCategoryTake}`
                : css.iconCategory}
                src={`/images/icon/${icon.icon}`}
                alt={icon.icon}
              />
              )
            )}
          </div>
          <div className={css.right}>
            <div className={css.userName}>
              <ButtonDropdown
                type="secondary"
                scale={0.5}
              >
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => navigate(`/profile/${userSession.id}`)}
                  main
                >{userSession.user_name}
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => navigate(`/profile/${userSession.id}`)}
                >Личный кабинет
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => navigate('/favourites')}
                >Избранное
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => 1}
                >Мои подписки
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => 2}
                >Мои подписчики
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => navigate(`/profile/${userSession.id}/chat`)}
                >Сообщения
                </ButtonDropdown.Item>
                <ButtonDropdown.Item
                  style={{ fontSize: 12, padding: 5 }}
                  onClick={() => dispatch(authLogOut())}
                >Выйти
                </ButtonDropdown.Item>
              </ButtonDropdown>
            </div>
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

 /* <div className={css.navbarCategory}>
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
          </div> */
