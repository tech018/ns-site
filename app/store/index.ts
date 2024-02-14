"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api.slice";
import productsReducer from "./products.slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          //* add secrialize elements
        },
      }).concat(apiSlice.middleware),
    devTools: true,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
