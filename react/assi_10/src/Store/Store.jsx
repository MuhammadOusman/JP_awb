import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AuthSlice/AuthSlice";
import singleUserReducer from "./SignleUserSlice/SingleUserSlice";
export const store = configureStore({
  reducer: {
    userReducer,
    singleUserReducer,
  },
});
