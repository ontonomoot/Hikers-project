import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reviewList: [],
  error: null,
};

// экспорт санок для загрузки списка всех отзывов
export const loadReview = createAsyncThunk(
  'review/loadReview',
  async (id) => {
    const data = await fetch(`/api/place/${id}/review`);
    if (data.status >= 400) {
      const { error } = await data.json();
      throw error;
    } else {
      return data.json();
    }
  }
);

// экспорт санок для добавления отзыва
export const addReview = createAsyncThunk(
  'review/addReview',
  async (valueForm) => {
    const response = await fetch(`/api/place/${valueForm.placeId}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        valueForm
      })
    });
    const data = await response.json();
    return data;
  }
);

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    // loadReview: (state, action) => {
    //   const newReview = action.payload;
    //   state.reviewList = newReview;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadReview.fulfilled, (state, action) => {
        state.reviewList = action.payload;
      })
      .addCase(loadReview.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviewList.unshift(action.payload);
        // state.reviewList = action.payload;
      });
  }
});

// экспорт функции селектора
export const selectReview = (state) => state.review.reviewList;

// экспорт функции редьюсера
export default reviewSlice.reducer;
