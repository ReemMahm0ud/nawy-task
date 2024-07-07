"use client";
import { createSlice } from "@reduxjs/toolkit";

const apartmentSlice = createSlice({
  name: "apartment",
  initialState: {
    apartments: [],
  },
  reducers: {
    allApartments: (state, action) => {
      state.apartments = action.payload;
    },
  },
});

export const { allApartments } = apartmentSlice.actions;
export default apartmentSlice.reducer;
