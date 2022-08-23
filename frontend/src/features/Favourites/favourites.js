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

const deleteFavPlaceThunk = createAsyncThunk(
  'favPlaces/delete',
  async (placeID) => {
    // console.log('getPlaceID', placeID);
    const response = await fetch('/api/favourites', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        placeID,
      })
    });
    const data = await response.json();
    console.log('data', data);
    return data;
  }
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
      })
      .addCase(deleteFavPlaceThunk.fulfilled, (state, action) => {
        // console.log('payload', action.payload);
        state.delFavouritesState = action.payload;
      });
  }
});

export {
  favouritesThunk,
  deleteFavPlaceThunk
};

export const selectorFavourites = (state) => state.favourites.favouritesState;
export const selectorDelFavourites = (state) => state.favourites.delFavouritesState;

// экспорт reducer'a
export default favouritesSlice.reducer;
