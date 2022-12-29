import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
