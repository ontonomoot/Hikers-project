import React from 'react';
import { useSelector } from 'react-redux';
import { selectorCategories } from '../mainPage';

import css from './Footer.module.css';

export default function FooterMain() {
  const categories = useSelector(selectorCategories);

  console.log(categories);

  if (!categories) return <div>Loading...</div>;

  return (
    <footer id={css.footerMain}>
      <div className={css.mainMarqAll}>
        <div className={css.mainMarques}>
          <div className={css.mainMarq}>
            {categories && categories.map((category) => (
              <div
                // style={{ backgroundImage: `url(/images/photo/${category.photo})` }}
                className={`${css.one} ${css.images}${category.id}`}
              >
                {category.title}
              </div>
            ))}
          </div>
          <div className={css.mainMarq}>
            {categories && categories.map((category) => (
              <div
                className={css.one}
                style={{
                  // backgroundImage: `url(/images/photo/${category.photo})`,
                  padding: '20px'
                }}
              >
                {category.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
