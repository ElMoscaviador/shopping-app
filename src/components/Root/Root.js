import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
];

const Root = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Root;
export { routes };
