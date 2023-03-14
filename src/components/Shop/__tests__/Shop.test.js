import userEvent from "@testing-library/user-event";
import { act, render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../Root/Root";
import { mockCategories, mockItems, mockSKUs } from "../../../jest/mockData";

describe("The shop page renders correctly.", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/", "/shop"] });
  test("The main box is displayed.", async () => {
    render(<RouterProvider router={router} />);
    const mainBox = await screen.findByRole("generic", { name: "shop" });
    expect(mainBox).toBeInTheDocument();
  });

  test("The shop categories are displayed.", async () => {
    render(<RouterProvider router={router} />);
    const shopNavBar = await screen.findByRole("complementary", {
      name: "shop-nav",
    });
    const shopNavBarLinks = await screen.findAllByRole("link", {
      name: "shop-nav-link",
    });
    expect(shopNavBar).toBeInTheDocument();
    expect(shopNavBarLinks.length).toBe(4);
  });
});

test("The shop categories links redirect to the right routes.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, { initialEntries: ["/", "/shop"] });
  const view = render(<RouterProvider router={router} />);
  const shopCategories = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  shopCategories.forEach(
    async (category) => await act(async () => await user.click(category))
  );
  mockCategories.forEach(async (category) => {
    const singleCategory = await screen.findByTestId(category.id);
    expect(singleCategory).toBeInTheDocument();
  });
});

describe("Clicking on a category displays the right categories page.", () => {
  test("Category 1.", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/shop"],
    });
    render(<RouterProvider router={router} />);
    const shopCategories = await screen.findAllByRole("link", {
      name: "shop-nav-link",
    });
    await act(async () => await user.click(shopCategories[0]));
    const thumbnails = await screen.findAllByRole("generic", {
      name: "item-thumbnail",
    });
    await waitFor(() => expect(thumbnails.length).toBe(4));
  });
});
test("Category 2.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopCategories = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(async () => await user.click(shopCategories[1]));
  const thumbnails = await screen.findAllByRole("generic", {
    name: "item-thumbnail",
  });
  expect(thumbnails.length).toBe(6);
});
test("Category 3.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopCategories = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(async () => await user.click(shopCategories[2]));
  const thumbnails = await screen.findAllByRole("generic", {
    name: "item-thumbnail",
  });
  expect(thumbnails.length).toBe(3);
});
test("Category 4.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopCategories = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(async () => await user.click(shopCategories[3]));
  const thumbnails = await screen.findAllByRole("generic", {
    name: "item-thumbnail",
  });
  expect(thumbnails.length).toBe(5);
});

test("Clicking an item thumbnail opens the right item page.", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/shop"],
  });
  render(<RouterProvider router={router} />);
  const shopCategories = await screen.findAllByRole("link", {
    name: "shop-nav-link",
  });
  await act(async () => {
    await user.click(shopCategories[0]);
  });
  const thumbnails = await screen.findAllByRole("link", {
    name: "thumbnail-name",
  });
  await act(() => user.click(thumbnails[0]));
  const itemPage = await screen.findByTestId(
    `item-page-${mockSKUs[0]}`
  );
  expect(itemPage).toBeInTheDocument();
});
