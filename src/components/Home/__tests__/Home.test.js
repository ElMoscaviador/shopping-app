import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../Root/Root";

describe("The home page is displayed correctly.", () => {
  const router = createMemoryRouter(routes);

  test("The main element is displayed.", () => {
    render(<RouterProvider router={router} />);
    const home = screen.queryByRole("main", { name: "home" });
    expect(home).toBeInTheDocument();
  });
  test("The shop button is displayed.", () => {
    render(<RouterProvider router={router} />);
    const shopButton = screen.queryByRole("button", { name: "to-shop" });
    expect(shopButton).toBeInTheDocument();
  });
});
