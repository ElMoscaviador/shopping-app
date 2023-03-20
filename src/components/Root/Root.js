import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const Root = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Root;
export { routes };
