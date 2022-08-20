import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  placeState: null,
};

const placeThunk = createAsyncThunk(
  'get/places',
  async (id) => {
    try {
      const response = await fetch(`/api/places/${id}`);
      const data = await response.json();
      // console.log('data', data);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const placeSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeThunk.fulfilled, (state, action) => {
        // console.log('payload', action.payload);
        state.placeState = action.payload;
      });
  }
});

export {
  placeThunk,
};

export const selectorPlaces = (state) => state.places.placeState;

// экспорт reducer'a
export default placeSlice.reducer;
