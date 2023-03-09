import userEvent from "@testing-library/user-event";
import { act, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Root";

test("Clicking the shop button redirects to the shop page.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router} />);
  const shopButton = screen.getByRole("button", { name: "to-shop" });
  await act(() => user.click(shopButton));
  const shopPage = await screen.findByRole("generic", { name: "shop" });
  expect(shopPage).toBeInTheDocument();
});

test("The navbar links redirect to the right sections.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router} />);
  const navBarLinks = screen.queryAllByRole("link", { name: "main-nav-link" });
  await act(() => user.click(navBarLinks[0]));
  const homePage = screen.queryByRole("main", { name: "home" });
  expect(homePage).toBeInTheDocument();
  await act(() => user.click(navBarLinks[1]));
  const shopPage = screen.queryByRole("generic", { name: "shop" });
  expect(shopPage).toBeInTheDocument();
  await act(() => user.click(navBarLinks[3]));
  const cart = screen.queryByRole("main", { name: "cart" });
  expect(cart).toBeInTheDocument();
});
