import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  loginError: false,
  registartion: false,
};

const authLogin = createAsyncThunk(
  'auth/login',

  async (form) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        form,
      })
    });

    const data = await response.json();

    if (!data.auth) {
      throw data.auth;
    }

    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    booleanAuth: (state) => {
      state.login = !state.login;
    },
    errorAuth: (state) => {
      state.loginError = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state) => {
        state.loginError = false;
        state.login = !state.login;
      })
      .addCase(authLogin.rejected, (state) => {
        state.loginError = true;
      });
  }
});

// экспортирую санки
export {
  authLogin
};

// экспорт функции-селекторов
export const selectorAuthLogin = (state) => state.auth.login;
export const selectorAuthLoginError = (state) => state.auth.loginError;

// экспорт функции action
export const {
  booleanAuth,
  errorAuth,
} = authSlice.actions;

// экспорт reducer'a
export default authSlice.reducer;
