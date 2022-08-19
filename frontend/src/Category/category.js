import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

const chooseCategory = createAsyncThunk(
  'choose/category',

)