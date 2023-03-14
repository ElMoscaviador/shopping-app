import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../Root/Root";

test("If it is empty, the cart displays a title and a placeholder only.", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/cart"],
  });
  render(<RouterProvider router={router} />);
  const mainWrapper = screen.getByRole("main", { name: "cart" });
  const title = screen.getByRole("heading", { name: "cart-title" });
  const placeholder = screen.getByText(/is empty/);
  expect(mainWrapper).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
});

test("If items have been added to the cart, they appear on the page.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopNavLinks = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(() => user.click(shopNavLinks[0]));
  const categoryThumbnails = await screen.findAllByRole("link", {
    name: "thumbnail-name",
  });
  await act(() => user.click(categoryThumbnails[0]));
  const addToCart = await screen.findByRole("button", { name: "add-to-cart" });
  await act(() => user.click(addToCart));
  const mainNavLinks = await screen.findAllByRole("link", {
    name: "main-nav-link",
  });
  await act(() => user.click(mainNavLinks[2]));
  const cartItem = await screen.findAllByRole("generic", {
    name: "cart-item-box",
  });
  expect(cartItem.length).toBe(1);
});

test(`Bringing an item's quantity to 0 removes the item from the cart.`, async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopNavLinks = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(() => user.click(shopNavLinks[0]));
  const categoryThumbnails = await screen.findAllByRole("link", {
    name: "thumbnail-name",
  });
  await act(() => user.click(categoryThumbnails[0]));
  const addToCart = await screen.findByRole("button", { name: "add-to-cart" });
  await act(() => user.click(addToCart));
  const mainNavLinks = await screen.findAllByRole("link", {
    name: "main-nav-link",
  });
  await act(() => user.click(mainNavLinks[2]));
  const quantity = await screen.findByRole("spinbutton", { name: "quantity" });
  let cartItem = await screen.findAllByRole("generic", {
    name: "cart-item-box",
  });
  await act(() => user.click(quantity));
  fireEvent.change(quantity, { target: { value: 0 } });
  cartItem = screen.queryAllByRole("generic", {
    name: "cart-item-box",
  });
  expect(cartItem.length).toBe(0);
});

test("Increasing the item quantity increases the price.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopNavLinks = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(() => user.click(shopNavLinks[0]));
  const categoryThumbnails = await screen.findAllByRole("link", {
    name: "thumbnail-name",
  });
  await act(() => user.click(categoryThumbnails[0]));
  const addToCart = await screen.findByRole("button", { name: "add-to-cart" });
  await act(() => user.click(addToCart));
  const mainNavLinks = await screen.findAllByRole("link", {
    name: "main-nav-link",
  });
  await act(() => user.click(mainNavLinks[2]));
  const price = await screen.findByTestId("item-box-price");
  const quantity = await screen.findByRole("spinbutton", { name: "quantity" });
  const newPrice = Number((price.textContent.slice(1) * 5));
  await act(() => user.click(quantity));
  fireEvent.change(quantity, { target: { value: 5 } });
  expect(price).toHaveTextContent(`$${newPrice.toString()}`);
});
