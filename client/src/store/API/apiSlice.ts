import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_DEV_URL}/api`,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: () => `/user/login`,
    }),
  }),
});

export const { useGetUserInfoQuery } = apiSlice;
