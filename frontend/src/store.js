import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './features/main/auth';

const store = configureStore(
  {
    reducer: {
      auth: navBarSlice,
    }
  }
);

export default store;
