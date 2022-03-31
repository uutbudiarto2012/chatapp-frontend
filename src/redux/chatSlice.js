import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: null,
    chats: null,
    loading: false,
  },
  reducers: {
    setChatSelected: (state, action) => {
      state.message = action.payload.message;
      state.loading = action.payload.loading;
    },
    getChats: (state, action) => {
      state.chats = action.payload.chats;
    },
  },
});

export const { setChatSelected, getChats } = chatSlice.actions;
export default chatSlice.reducer;
