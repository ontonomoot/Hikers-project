/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import init from './apiMap';

export default function Category() {
  const { id } = useParams();

  const category = useSelector((state) => state.category);
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  useEffect(() => {
    async function winFunc() {
      await window.ymaps.ready(init);
    }
    winFunc();
  }, []);

  return (
    <>
      <h1 id={1} className="category">Категория</h1>
      <div id="map" />

    </>
  );
}
