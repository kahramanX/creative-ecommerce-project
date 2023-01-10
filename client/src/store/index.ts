import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { apiSlice } from "./API/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
