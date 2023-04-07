import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App/App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Category from "../Category/Category";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Page404 from "../Page404/Page404";

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
            element: <Product />,
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
  {
    path: "*",
    element: <Page404 />,
  },
];

const Router = () => <RouterProvider router={createBrowserRouter(routes, {basename: '/'})} />;

export default Router;
export { routes };
