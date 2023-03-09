import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../Root/Root";

describe("The main nav is displayed correctly.", () => {
  const router = createMemoryRouter(routes);
  test("The main element is displayed.", () => {
    render(<RouterProvider router={router} />);
    const navBar = screen.queryByRole("navigation", { name: "main-nav" });
    expect(navBar).toBeInTheDocument();
  });
  test("All tabs are displayed.", () => {
    render(<RouterProvider router={router} />);
    const navBarLinks = screen.queryAllByRole("link", {
      name: "main-nav-link",
    });
    expect(navBarLinks.length).toBe(4);
  });
});
