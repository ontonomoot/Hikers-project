import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  favouritesState: null,
};

const favouritesThunk = createAsyncThunk(
  'favourite/places',
  async () => {
    try {
      const response = await fetch('/api/favourites');
      const data = await response.json();
      // console.log('favouritePlaces', data);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const favouritesSlice = createSlice({
  name: 'favouritePlaces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(favouritesThunk.fulfilled, (state, action) => {
        // console.log('payload', action.payload);
        state.favouritesState = action.payload;
      });
  }
});

export {
  favouritesThunk,
};

export const selectorFavourites = (state) => state.favourites.favouritesState;

// экспорт reducer'a
export default favouritesSlice.reducer;
