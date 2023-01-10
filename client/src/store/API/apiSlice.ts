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
        console.log("apiSlice", data);

        return { url: "/user/login", method: "POST", body: data };
      },
      invalidatesTags: ["Api"],
      transformResponse: (res) => console.log(res, "çıkan sonuç"),
    }),
  }),
});

export const { useUserLoginMutation } = apiSlice;
