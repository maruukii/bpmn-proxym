import modelerSlice from './modeler/modelerSlice';
import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./file/fileSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    file: fileReducer,
    user: userReducer,
    modeler: modelerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
