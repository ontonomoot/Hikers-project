import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  edit: false,
  profile: []
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

const editProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    editProfile: (state) => {
      state.edit = !state.edit;
    },
    newProfile: (state, action) => {
      state.profile = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  }
});

export {
  getProfileThunk
};

export const selectorEditProfile = (state) => state.profile.edit;
export const selectorProfile = (state) => state.profile.profile;

export const {
  editProfile,
  newProfile
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
