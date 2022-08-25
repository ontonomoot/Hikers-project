import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  newCard: null,
  addNewCard: false,
};

const newCardThunk = createAsyncThunk(
  'newcard/push',
  async (form) => {
    const response = await fetch('/api/newcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        form,
      })
    });
    const data = await response.json();
  }
);

const newCardSlice = createSlice({
  name: 'newcard',
  initialState,
  reducers: {
    openAddNewCard: (state) => {
      state.addNewCard = !state.addNewCard;
    }
  },
});

export {
  newCardThunk,
};

export const selectorAddNewCard = (state) => state.newcard.addNewCard;

export const {
  openAddNewCard
} = newCardSlice.actions;

export default newCardSlice.reducer;
