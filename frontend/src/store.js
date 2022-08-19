/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
import reviewSlice from './features/placePage/reviews/review.js';
// import categorySlice from './Category/category';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
    review: reviewSlice,
    // category: categorySlice,
  }
});

export default store;
