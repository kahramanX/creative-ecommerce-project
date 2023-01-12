import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_DEV_URL}/api`,
  }),
  tagTypes: ["Api"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => {
        return {
          url: "/user/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
      },
      invalidatesTags: ["Api"],
    }),
  }),
});

export const { useUserLoginMutation } = apiSlice;
