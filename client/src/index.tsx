import ReactDOM from "react-dom/client";
import App from "App";
import "assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "store/API/apiSlice";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApiProvider>
);
