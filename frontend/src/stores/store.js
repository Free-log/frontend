import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import fileEffectSlice from "./fileEffectSlice";

export const store = configureStore({
  reducer: { token: tokenSlice.reducer, fileEffect: fileEffectSlice.reducer },
});
