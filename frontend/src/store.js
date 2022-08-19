/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
import categorySlice from './features/Category/category.js';
import weatherSlice from './features/weather/weather.js';
import reviewSlice from './features/placePage/reviews/review.js';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
<<<<<<< HEAD
    category: categorySlice,
    review: reviewSlice,
=======
    review: reviewSlice,
    category: categorySlice,
>>>>>>> cf02539e718a5fdd2f8257dbe1eca4706e9b6182
    weather: weatherSlice,
  }
});

export default store;
