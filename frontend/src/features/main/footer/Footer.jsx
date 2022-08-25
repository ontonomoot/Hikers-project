/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectorCategories } from '../mainPage';

import css from './Footer.module.css';

export default function FooterMain() {
  const categories = useSelector(selectorCategories);
  const navigate = useNavigate();

  if (!categories) return <div>Loading...</div>;

  return (
    <footer id={css.footerMain}>
      <div className={css.mainMarqAll}>
        <div className={css.mainMarques}>
          <div className={css.mainMarq}>
            {categories && categories.map((category) => (
              <div className={css.one}>
                <img
                  style={{ overflow: 'hidden' }}
                  src={`/images/footer/${category.photo}`}
                  className={css.oneImg}
                  alt=""
                />
                <p
                  onClick={() => navigate(`/categories/${category.id}`)}
                  className={css.oneP}
                >{category.title}
                </p>
              </div>
            ))}
          </div>
          <div className={css.mainMarq}>
            {categories && categories.map((category) => (
              <div className={css.one}>
                <img
                  style={{ overflow: 'hidden' }}
                  src={`/images/footer/${category.photo}`}
                  className={css.oneImg}
                  alt=""
                />
                <p
                  onClick={() => navigate(`/categories/${category.id}`)}
                  className={css.oneP}
                >{category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
