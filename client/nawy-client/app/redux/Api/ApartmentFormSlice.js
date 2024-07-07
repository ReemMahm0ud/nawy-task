"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApartmentFormSlice = createApi({
  reducerPath: "apartment form api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/v1/apartment" }),
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (form) => ({
        url: "/createApartment",
        method: "POST",
        body: form,
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = ApartmentFormSlice;
