import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  edit: false,
  profiles: []
};

const editProfileThunk = createAsyncThunk(
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProfileThunk.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  }
});

export {
  editProfileThunk
};

export const selectorEditProfile = (state) => state.profile.edit;
export const selectorProfile = (state) => state.profile.profile;

export const {
  editProfile
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
