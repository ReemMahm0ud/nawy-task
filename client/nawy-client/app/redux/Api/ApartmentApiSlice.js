"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApiSlice = createApi({
  reducerPath: "apartmentApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/v1/apartment" }),
  endpoints: (builder) => ({
    getAllApartments: builder.query({
      query: () => "/getAllApartments",
    }),
    getApartmentDetails: builder.query({
      query: (id) => `/getApartmentDetails/${id}`,
    }),
  }),
});

export const { useGetAllApartmentsQuery, useGetApartmentDetailsQuery } =
  apartmentApiSlice;
