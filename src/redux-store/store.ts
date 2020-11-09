import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import apiMiddleware from "../middleware/api";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({serializableCheck: false}), apiMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

// for thunk Promise type
export type ThunkResult<Result> = ThunkAction<Result, RootState, unknown, Action<string>>;

export default store;