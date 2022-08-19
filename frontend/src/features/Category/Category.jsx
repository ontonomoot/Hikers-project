/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import init from './apiMap';
import {
  categoryThunk, selectorCategory
} from './category';

export default function Category() {
  const { id } = useParams();

  const categories = useSelector(selectorCategory);
  console.log('+', categories);
  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    console.log('useEffect');
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
    dispatch(categoryThunk(id));
  }, [dispatch, id]);

  // console.log('test')
  //  console.log('na glavnoi', categories[0]);

  return (
    <>
      {categories && <h1 id={id} className="category">{categories.title}</h1>}
      {/* <h1 id={id} className="category">Категория</h1> */}
      <div id="map" />
    </>

  );
}
