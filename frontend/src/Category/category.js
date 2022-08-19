import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

const categoryThunk = createAsyncThunk(
  'choose/category',
  async () => {
    const response = await fetch('/api/categories');
    const data = await response.json();
    return data;
    // if (data.status >= 400) {
    //   const {
    //     error
    //   } = await data.json();
    //   throw error;
    // } else {
    //   return console.log(data.json());
    // }
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryThunk.fulfilled, (state, action) => {
        state.category = action.payload;
      });
  }
});

export {
  categoryThunk
};

export const selectorCategory = (state) => state.category.category;

// экспорт reducer'a
export default categorySlice.reducer;
