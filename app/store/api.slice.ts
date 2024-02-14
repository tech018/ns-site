"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL,
  }),
  tagTypes: ["Quotes"],
  endpoints: () => ({}),
});
