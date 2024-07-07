"use client";
import { configureStore } from "@reduxjs/toolkit";
import apartmentSlice from "./slices/apartmentSlice";
import { ApartmentFormSlice } from "./Api/ApartmentFormSlice";
import { apartmentApiSlice } from "./Api/ApartmentApiSlice";

export default configureStore({
  reducer: {
    apartment: apartmentSlice,

    [ApartmentFormSlice.reducerPath]: ApartmentFormSlice.reducer,
    [apartmentApiSlice.reducerPath]: apartmentApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ApartmentFormSlice.middleware,
      apartmentApiSlice.middleware
    ),
});
