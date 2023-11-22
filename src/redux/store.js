import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginSlice
  },
});
