import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import modelerReducer from "./modeler/modelerSlice";
import fileReducer from "./file/fileSlice";
import userReducer from "./user/userSlice";
import processReducer from "./process/processSlice";
import appDefsReducer from "./process/appDefsSlice";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","process","file"],
  debug:true
};

const rootReducer = {
  file: persistReducer(persistConfig,fileReducer),
  user:persistReducer(persistConfig,userReducer) ,
  process:persistReducer(persistConfig,processReducer),
  modeler: modelerReducer, 
  appDefs:appDefsReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          "modeler.activeElement",
          "modeler.modeler",
          "modeler.moddle",
          "modeler.modeling",
          "modeler.canvas",
          "modeler.elementRegistry",
        ],
        ignoredActions: ["modeler/setElement", "modeler/setModeler"
],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;