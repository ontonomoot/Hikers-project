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

  const category = useSelector(selectorCategory);
  const dispatch = useDispatch();
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
    dispatch(categoryThunk());
  }, []);

  console.log('na glavnoi', category);

  return (
    <>
      <h1 id={category.id} className="category">{category.title}</h1>
      <div id="map" />

    </>
  );
}
