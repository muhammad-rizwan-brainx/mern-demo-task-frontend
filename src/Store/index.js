import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slices/authSlice";
import { taskReducer } from "./Slices/taskSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    task: taskReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
