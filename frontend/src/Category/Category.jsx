/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import init from './apiMap';

export default function Category() {
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
