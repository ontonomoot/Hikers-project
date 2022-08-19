/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
// import categorySlice from './Category/category.js';
import weatherSlice from './features/weather/weather.js';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
    // category: categorySlice,
    weather: weatherSlice,
  }
});

export default store;
