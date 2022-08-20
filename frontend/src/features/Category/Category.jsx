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

import './category.css';

export default function Category() {
  const { id } = useParams();

  const categories = useSelector(selectorCategory);
  // console.log('+', categories);
  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
    dispatch(categoryThunk(id));
  }, [dispatch, id]);

  // console.log('test')
  //  console.log('na glavnoi', categories[0]);

  return (
    <div className="categoriesBox">
      {categories && <h1 id={id} className="category">{categories.title}</h1>}
      {/* <h1 id={id} className="category">Категория</h1> */}
      <div>
        <div id="map" />
        <div id="placeFilter">

          <span>
            <span className="ratingNum">1</span>
            <Star color="orange" size={50} value={5} icon={<Text>1</Text>} type="secondary" />
          </span>
          <span>
            <span className="ratingNum">2</span>
            <Star color="orange" size={50} value={5} icon={<Text>1</Text>} type="secondary" />
          </span>
          <span>
            <span className="ratingNum">3</span>
            <Star color="orange" size={50} value={5} icon={<Text>1</Text>} type="secondary" />
          </span>
          <span>
            <span className="ratingNum">4</span>
            <Star color="orange" size={50} value={5} icon={<Text>1</Text>} type="secondary" />
          </span>
          <span>
            <span className="ratingNum">5</span>
            <Star color="orange" size={50} value={5} icon={<Text>1</Text>} type="secondary" />
          </span>
        </div>
      </div>

    </div>

  );
}
