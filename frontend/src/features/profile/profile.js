import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  edit: false,
  profile: [],
  friends: [],
};

const getProfileThunk = createAsyncThunk(
  'profile/edit',
  async (id) => {
    const response = await fetch(`/api/profile/${id}`, {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  }
  );

  // добавление друзей
  const subscribeThunk = createAsyncThunk(
    'profile/friends',
    async ({ userId, friendId }) => {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
          userId,
          friendId,
        })

      });
      const data = await response.json();
      return data;
    }
  );

  // отправка фото
  export const addPhotoProfile = createAsyncThunk(
    'profile/addPhotoProfile',
    async (photos) => {
      const response = await fetch('/api/profile/photo', {
        method: 'PUT',
        body: photos
      });
      const data = await response.json();
      return data;
    }
  );

const editProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    editProfile: (state) => {
      state.edit = !state.edit;
    },
    newProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(addPhotoProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  }
});

export {
  getProfileThunk,
  subscribeThunk,
};

export const selectorEditProfile = (state) => state.profile.edit;
export const selectorProfile = (state) => state.profile.profile;
export const selectorFriends = (state) => state.profile.friends;

export const {
  editProfile,
  newProfile,
  subscribe,
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
