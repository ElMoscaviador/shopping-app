import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "../AppWrapper/AppWrapper";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import ItemPage from "../Item/ItemPage/ItemPage";
import Shop from "../Shop/Shop";
import ShopCategory from "../Shop/ShopCategory";
import { loader as categoryLoader } from "../Shop/ShopCategory";
import { loader as itemPageLoader } from "../Item/ItemPage/handlers";

const routes = [
  {
    path: "/",
    element: <AppWrapper />,
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
            path: "/shop/:category",
            element: <ShopCategory />,
            loader: categoryLoader,
          },
          {
            path: "/shop/:category/:sku",
            element: <ItemPage />,
            loader: itemPageLoader,
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

const Root = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Root;
export { routes };
