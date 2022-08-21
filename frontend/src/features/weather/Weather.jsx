import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCategory, categoryThunk } from '../Category/category';
import { getCoordinate, selectorWeather } from './weather';
import './Weather.css';
import Category from '../Category/Category';
import { placeThunk, selectorPlaces } from '../Category/places';

function Weather() {
const dispatch = useDispatch();
const weatherSelector = useSelector(selectorWeather);
const places = useSelector(selectorPlaces);

const searchLocation = async (event) => {
  dispatch(getCoordinate({ lat: 59.57, lon: 30.18 }));
};

useEffect(() => {
  searchLocation();
  dispatch(categoryThunk(1));
  dispatch(placeThunk(6));
  console.log('места', places);
}, [dispatch]);
console.log(weatherSelector, 'вот он');
return (
  <div>
    <div className="weather-days">
      {weatherSelector && weatherSelector.map((day) => (
        <div className="weather-day" key={day.dt}>
          <div>
            <h4>{day.dt_txt.slice(5, 10).split('-').reverse().join('.')}</h4>
          </div>
          <div>
            {`${day.main.temp.toFixed(1)} °C`}
            <img className="weather-img" src={`/images/categories/weather/${day.weather[0].main.toLowerCase()}.png`} alt="img" />
            <p>
              {`Ветер ${day.wind.speed.toFixed(1)} м/с`}
            </p>
          </div>
        </div>
      )
      )}
    </div>
    <Category />
  </div>
);
}

export default Weather;
