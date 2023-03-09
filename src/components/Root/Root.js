import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "../AppWrapper/AppWrapper";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import ShopCategory from "../Shop/ShopCategory";
import ItemPage from "../Item/ItemPage";
import Cart from "../Cart/Cart";
import { loader as shopLoader, action as shopAction } from "../Shop/Shop";
import { loader as categoryLoader } from "../Shop/ShopCategory";
import { loader as itemPageLoader } from "../Item/ItemPage";

const routes = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        action: shopAction,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: shopLoader,
        children: [
          {
            path: "/shop/:categoryId",
            element: <ShopCategory />,
            loader: categoryLoader,
          },
          {
            path: "/shop/:categoryId/:productId",
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

const Root = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default Root;
export { routes };
