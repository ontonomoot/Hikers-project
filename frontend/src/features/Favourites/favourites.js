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
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const addFavPlaceThunk = createAsyncThunk(
  'favPlaces/add',
  async (placeid) => {
    const response = await fetch('/api/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        placeid,
      })
    });
    const data = await response.json();
    return data;
  }
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
    // console.log('data', data);
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
        state.delFavouritesState = action.payload;
        state.favouritesState = action.payload;
      })
      .addCase(addFavPlaceThunk.fulfilled, (state, action) => {
        state.addFavouritesState = action.payload;
        state.favouritesState = action.payload;
      });
  }
});

export {
  favouritesThunk,
  deleteFavPlaceThunk,
  addFavPlaceThunk,
};

export const selectorFavourites = (state) => state.favourites.favouritesState;
export const selectorAddFavourites = (state) => state.favourites.addFavouritesState;
export const selectorDelFavourites = (state) => state.favourites.delFavouritesState;

// экспорт reducer'a
export default favouritesSlice.reducer;
