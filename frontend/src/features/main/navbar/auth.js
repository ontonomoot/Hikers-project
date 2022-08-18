import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  registartion: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    booleanAuth: (state) => {
      state.login = !state.login;
    }
  }
});

// экспорт функции-селекторов
export const selectorAuth = (state) => state.auth.login;

// экспорт функции action
export const {
  booleanAuth,
} = authSlice.actions;

// экспорт reducer'a
export default authSlice.reducer;
