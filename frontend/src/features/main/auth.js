import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  loginError: false,
  registartion: false,
  registartionError: false,
  userSession: null,
};

// Санки проверка на сессию
const auth = createAsyncThunk(
  'auth/auth',
  async () => {
    const response = await fetch('/api/auth', {
      method: 'POST',
    });
    const data = await response.json();

    return data.session;
  }
);

// Санки логин
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

// Санки логин
const authRegistration = createAsyncThunk(
  'auth/registration',
  async (form) => {
    const response = await fetch('/api/registration', {
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

// Санки выйти с сессии
const authLogOut = createAsyncThunk(
  'auth/logout',
  async () => {
    const response = await fetch('/api/logout', {
      method: 'POST'
    });
    const data = await response.json();
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    booleanAuthLogin: (state) => {
      state.login = !state.login;
    },
    errorAuthLogin: (state) => {
      state.loginError = false;
    },
    booleanAuthReg: (state) => {
      state.registartion = !state.registartion;
    },
    errorAuthReg: (state) => {
      state.registartionError = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.fulfilled, (state, action) => {
        state.userSession = action.payload;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loginError = false;
        state.login = !state.login;
        state.userSession = action.payload.session;
      })
      .addCase(authLogin.rejected, (state) => {
        state.loginError = true;
      })
      .addCase(authLogOut.fulfilled, (state) => {
        state.userSession = null;
      });
  }
});

// экспортирую санки
export {
  auth,
  authLogin,
  authRegistration,
  authLogOut
};

// экспорт функции-селекторов
export const selectorUserSession = (state) => state.auth.userSession;
export const selectorAuthLogin = (state) => state.auth.login;
export const selectorAuthLoginError = (state) => state.auth.loginError;
export const selectorAuthReg = (state) => state.auth.registartion;
export const selectorAuthRegError = (state) => state.auth.registartionError;

// экспорт функции action
export const {
  booleanAuthLogin,
  errorAuthLogin,
  booleanAuthReg,
  errorAuthReg,
} = authSlice.actions;

// экспорт reducer'a
export default authSlice.reducer;
