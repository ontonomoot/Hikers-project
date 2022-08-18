import { configureStore } from '@reduxjs/toolkit';
import navBarSlice from './features/main/navbar/auth';

const store = configureStore(
  {
    reducer: {
      auth: navBarSlice,
    }
  }
);

export default store;
