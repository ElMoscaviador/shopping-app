import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Category from "../Shop/Category";
import Item from "../Shop/Item";
import Cart from "../Cart/Cart";

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
          {
            path: ":category/:sku",
            element: <Item />,
            loader: ({ params }) => {
              return { sku: params.sku, category: params.category };
            },
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

const Router = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Router;
export { routes };
