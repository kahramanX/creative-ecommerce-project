import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_DEV_URL }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => `/user/:userID/get`,
    }),
  }),
});

export const { useGetUserInfoQuery } = apiSlice;
