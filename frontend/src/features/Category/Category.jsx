/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import init from './apiMap';
import {
  categoryThunk, selectorCategory
} from './categorySlice';
import { categoriesThunk, selectorCategories } from '../main/mainPage';
import {
  placeThunk, selectorPlaces
} from './placesSlice';
import Place from './Place';

import './category.css';

export default function Category() {
  const { id } = useParams();

  const places = useSelector(selectorPlaces);
  const allCategories = useSelector(selectorCategories);
  const categories = allCategories ? allCategories.find((el) => el.id === Number(id)) : null;

  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    setTimeout(() => {
      const daddy = document.querySelector('#map').closest('#daddy');
      document.querySelector('#map').remove();
      const newMap = document.createElement('div');
      newMap.id = 'map';
      newMap.style.width = '600px';
      newMap.style.height = '450px';
      daddy.insertAdjacentElement('afterBegin', newMap);
      console.log(newMap);
      winFunc();
    }, 1000);
    dispatch(categoriesThunk());
    dispatch(placeThunk(id));
  }, [dispatch, id]);

  if (!allCategories) return <div>Loading</div>;
  if (!categories) return <div>Loading</div>;

  return (
    <div className="categoriesBox">
      <div className="placeTitleBox">
        {categories && <h1 id={id} className="category">{categories.title}</h1>}
        <p className="placesListTitle">Список мест для <span className="placesPlusListTitle">{categories.title}а </span></p>
      </div>
      <div id="daddy">
        <div id="map" style={{ width: 600, height: 450 }} />
        <div id="placeFilter">
          <div className="placesContainer" id="placesContainer">
            {
              places &&
              places.map((place, i) => <Place key={`${i + 1}`} place={place} placeID={place.id} />)
            }
          </div>
        </div>
      </div>

    </div>

  );
}
