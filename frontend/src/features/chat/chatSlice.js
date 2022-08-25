// allchat
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  chats: null,
  chatsWith: null,
};

const chatsThunk = createAsyncThunk(
  'chat/chat',
  async () => {
    const response = await fetch('/api/allchat');
    const data = await response.json();
    return data;
  }
);

const newMessageThunk = createAsyncThunk(
  'chat/newMes',
  async (form) => {
    const response = await fetch('/api/newMes', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        form,
      })
    });
    const data = await response.json();
    return data;
  }
);

const newChat = createAsyncThunk(
  'chat/newChat',
  async (user) => {
    const response = await fetch('/api/newChat', {
    method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        user,
      })
    });
    const data = await response.json();
    return data;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(chatsThunk.fulfilled, (state, action) => {
        state.chats = action.payload.chats;
        state.chatsWith = action.payload.chatsWith;
      })
      .addCase(newMessageThunk.fulfilled, (state, action) => {
        state.chats = action.payload.chats;
        state.chatsWith = action.payload.chatsWith;
      })
      .addCase(newChat.fulfilled, (state, action) => {
        state.chats = action.payload.chats;
        state.chatsWith = action.payload.chatsWith;
      });
  }
});

export {
  chatsThunk,
  newMessageThunk,
  newChat
};

export const selectorChats = (state) => state.chat.chats;
export const selectorChatsWith = (state) => state.chat.chatsWith;

export default chatSlice.reducer;
