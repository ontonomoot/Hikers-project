/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectorCategories, categoriesThunk } from './mainPage';
import css from './Main.module.css';

export default function MainPage() {
  // const memoCategories = useMemo(() => selectorCategories, [selectorCategories]);
  const categories = useSelector(selectorCategories);
  const navigate = useNavigate();

  const [getDownCat, setGetDownCat] = useState(5);
  const [getUpCat, setGetUpCat] = useState(0);
  const [titleUp, setTitleUp] = useState(1);
  const [trueCssUp, setTrueCssUp] = useState(false);
  const [trueCssDown, setTrueCssDown] = useState(false);

  if (!categories) return <div>Loading...</div>;

  return (
    <>
      <div className={css.mainTitle}>{categories[getUpCat].title}</div>
      <div id={css.main}>
        <span className={css.photo}>
          {trueCssUp && (
          <img
            className={trueCssUp ? `${css.photo} ${css.photoUpAnimation}` : css.photo}
            src={`/images/categories/photo/${categories[getUpCat].photo}`}
            alt={categories[getUpCat].photo}
          />
          )}
          <img
            onClick={() => navigate(`/categories/${categories[getUpCat].id}`)}
            className={trueCssUp
              ? `${css.photo} ${css.photoUpMainA}`
              : trueCssDown
              ? `${css.photo} ${css.photoDownMainA}`
              : css.photo}
            key={categories[getUpCat].id + categories[getUpCat].photo}
            src={
              trueCssUp ?
              `/images/categories/photo/${categories[getDownCat].photo}`
              : trueCssDown ?
              `/images/categories/photo/${categories[getUpCat].photo}`
              : `/images/categories/photo/${categories[getUpCat].photo}`
            }
            alt={categories[getUpCat].photo}
          />
          {trueCssDown && (
          <img
            className={trueCssDown ? `${css.photo} ${css.photoDownAnimation}` : css.photo}
            src={`/images/categories/photo/${categories[titleUp].photo}`}
            alt={categories[getUpCat].photo}
          />
          )}
        </span>
        <span className={css.mainRight}>
          <div className={css.buttonCategory}>
            <div>
              <div>
                {categories[getUpCat].title}
              </div>
              <div>
                {categories[getUpCat].description}
              </div>
            </div>
          </div>
          <div className={css.categoryChange}>
            <button
              className={css.buttonBack}
              key={`buttonkey${categories[0].id}`}
              type="button"
              onClick={() => {
                  setTrueCssDown(true);
                if (getDownCat === 5) {
                  setGetUpCat(5);
                  setTitleUp(0);
                  setGetDownCat((prev) => prev - 1);
                } else {
                  if (titleUp === 0) {
                    setTitleUp(6);
                  }
                  if (getDownCat === 0) {
                    setGetDownCat(6);
                  }
                  setTitleUp((prev) => prev - 1);
                  setGetUpCat((prev) => prev - 1);
                  setGetDownCat((prev) => prev - 1);
                }
                const interval = setTimeout(() => {
                  setTrueCssDown(false);
                  return clearInterval(interval);
                }, 1000);
              }}
            >Назад
            </button>
            {categories.map((icon, i) =>
              <img onClick={() => setGetUpCat(i)} className={i === getUpCat ? `${css.iconCategory} ${css.iconCategoryTake}` : css.iconCategory} src={`/images/categories/icon/${icon.icon}`} alt={icon.icon} />
            )}
            <button
              className={css.buttonNext}
              key={`buttonkey${categories[0].id}`}
              type="button"
              onClick={() => {
                  setTrueCssUp(true);
                if (getUpCat > 4) {
                  setGetUpCat(0);
                  setGetDownCat(5);
                  setTitleUp((prev) => prev + 1);
                } else {
                  setGetUpCat((prev) => prev + 1);
                  setGetDownCat((prev) => prev + 1);
                  setTitleUp((prev) => prev + 1);
                  if (titleUp === 5) setTitleUp(0);
                  if (getDownCat === 5) setGetDownCat(0);
                  // setGetDownCat((prev) => prev + 1);
                }
                const interval = setTimeout(() => {
                  setTrueCssUp(false);
                  return clearInterval(interval);
                }, 1000);
              }}
            >Вперед
            </button>
          </div>
        </span>
      </div>
      <Outlet />
    </>
  );
}

/* <span id={css.main}>
{categories && categories.map((category) => (
  <a href={`/categories/${category.id}`} key={category.id}>
    <Carousel>
      {category.photo.map((photo) => (
        <Carousel.Item>
          <img className={css.photo}
          key={category.id + photo} src={`/images/categories/photo/${photo}`} alt={photo} />
        </Carousel.Item>
      ))}
    </Carousel>
  </a>
)
)}
</span> */
/* <span className={css.buttonCategory}>
{categories.map((el) =>
  <button key={`buttonkey${el.id}`}
  type="button" onClick={() => setGetUpCat(() => el.id - 1)}>{el.id}</button>
)}
</span> */

/* <Carousel>
{categories[getUpCat].photo.map((photo) => (
  <Carousel.Item>
    <img
      className={css.photo}
      key={categories[getUpCat].id + photo}
      src={`/images/categories/photo/${photo}`}
      alt={photo}
    />
  </Carousel.Item>
))}
</Carousel> */

// trueCssUp ? (`/images/categories/photo/${categories[getDownCat].photo}` :
// `/images/categories/photo/${categories[getUpCat].photo}`)

/* <button className={i === getUpCat ? `${css.iconCategory} ${css.iconCategoryTake}`
: css.iconCategory} type="button" onClick={() => setGetUpCat(i)}>
<img className={i === getUpCat ? `${css.iconCategory} ${css.iconCategoryTake}`
: css.iconCategory} src={`/images/categories/icon/${icon.icon}`} alt={icon.icon} />
</button>
) */
