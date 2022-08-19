import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reviewList: [],
  error: null,
};

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
      });
  }
});

export const selectReview = (state) => state.review.reviewList;

export default reviewSlice.reducer;
