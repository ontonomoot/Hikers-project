import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const initialState = {
  favouritesState: [],
};

const favouritesThunk = createAsyncThunk(
  'favouritePlaces/places',
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
  'favouritePlaces/add',
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
    // console.log('data', data);
    return data;
  }
);

const deleteFavPlaceThunk = createAsyncThunk(
  'favouritePlaces/delete',
  async (favPlaceID) => {
    // console.log('getPlaceID', placeID);
    const response = await fetch('/api/favourites', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        favPlaceID,
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
        state.favouritesState = state.favouritesState
        .filter((el) => el.id !== Number(action.payload));
      })
      .addCase(addFavPlaceThunk.fulfilled, (state, action) => {
        console.log(action.payload, 'from slice');
        state.favouritesState.push(action.payload);
      });
  }
});

export {
  favouritesThunk,
  deleteFavPlaceThunk,
  addFavPlaceThunk,
};

export const selectorFavourites = (state) => state.favourites.favouritesState;

// экспорт reducer'a
export default favouritesSlice.reducer;
