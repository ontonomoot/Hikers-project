/* eslint-disable import/extensions */
import {
  configureStore
} from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth.js';
import categorySlice from './features/Category/category.js';

const store = configureStore({
  reducer: {
    auth: navBarSlice,
    category: categorySlice,
  }
});

export default store;
