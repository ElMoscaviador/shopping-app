import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "../AppWrapper/AppWrapper";

const routes = [
  {
    path: "/",
    element: <AppWrapper />,
  },
];

const Root = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Root;
export { routes };
