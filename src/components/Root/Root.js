import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Category from "../Shop/Category";

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
        children: [
          {
            path: ":category",
            element: <Category />,
            loader: ({ params }) => params,
          },
        ],
      },
    ],
  },
];

const Root = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Root;
export { routes };
