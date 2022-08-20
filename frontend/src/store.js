/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
import categorySlice from './features/Category/category.js';
import weatherSlice from './features/weather/weather.js';
import reviewSlice from './features/placePage/reviews/review.js';
import placeSlice from './features/Category/places.js';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
    category: categorySlice,
    places: placeSlice,
    review: reviewSlice,
    weather: weatherSlice,
  }
});

export default store;
