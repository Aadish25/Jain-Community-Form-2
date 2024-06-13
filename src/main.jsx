import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Homepage from "./pages/Homepage.jsx";
import SnackBar from "./components/snackbar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackBar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
