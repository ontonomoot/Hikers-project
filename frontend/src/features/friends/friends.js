import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  subscribers: []
};

// получение данных о всех юзерах и друзьях

const getFriendsThunk = createAsyncThunk(
  'profile/friends',
  async () => {
    const response = await fetch('/api/profile/friends', { method: 'GET' });
    const data = await response.json();
    // console.log(data, 'THUNK');
    return data;
  }
);

const getFriendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getFriendsThunk.fulfilled, (state, action) => {
      state.subscribers = action.payload;
    });
  }
});

export {
  getFriendsThunk,
};

export const selectorFriends = (state) => state.friends.subscribers;

export default getFriendsSlice.reducer;
