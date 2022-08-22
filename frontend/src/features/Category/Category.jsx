/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Text, Divider, Button } from '@geist-ui/core';
import Star from '@geist-ui/icons/star';
import init from './apiMap';
import {
  categoryThunk, selectorCategory
} from './category';
import {
  placeThunk, selectorPlaces
} from './places';
import Place from './Place';

import './category.css';

export default function Category() {
  const { id } = useParams();

  const categories = useSelector(selectorCategory);
  const places = useSelector(selectorPlaces);

  // console.log('places', places);
  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
    // console.log('effect');
    dispatch(categoryThunk(id));
    dispatch(placeThunk(id));
  }, []);

  return (
    <div className="categoriesBox">
      <div className="placeTitleBox">
        {categories && <h1 id={id} className="category">{categories.title}</h1>}
        <p className="placesListTitle">Список мест для <span className="placesPlusListTitle">{categories.title}а </span></p>
      </div>
      <div>
        <div id="map" />
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
