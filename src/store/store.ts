import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./bpm/fileSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    file: fileReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
