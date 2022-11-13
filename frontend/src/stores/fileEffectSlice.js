import { createSlice } from "@reduxjs/toolkit";

const fileEffectSlice = createSlice({
  name: "fileEffect",
  initialState: {
    open: false,
  },
  reducers: {
    getInitialValue: (state, action) => {
      state.open = action.payload ? true : false;
    },
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.refreshToken = false;
    },
  },
});

export default fileEffectSlice;
