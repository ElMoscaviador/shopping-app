import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { routes } from "../Router/Router";

const mockSetCategoryIsVisited = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe("The main navbar links redirect to the right pages.", () => {
  ["home", "shop", "cart"].forEach((page) => {
    test(`To the ${page} page`, async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={createMemoryRouter(routes)} />);
      const toSection = screen.getByRole("link", {
        name: new RegExp(page),
      });
      await act(() => user.click(toSection));
      const section = screen.getByRole("generic", {
        name: new RegExp(page, "i"),
      });
      expect(section).toBeInTheDocument();
    });
  });
});

describe("The categories navbar links redirect to the right categories", () => {
  ["costumes", "figures", "sonics"].forEach((category) =>
    test(`To ${category}`, async () => {
      const user = userEvent.setup();
      render(
        <RouterProvider
          router={createMemoryRouter(routes, { initialEntries: ["/shop"] })}
        />
      );
      const toCategory = screen.getByRole("link", {
        name: new RegExp(category),
      });
      await act(() => user.click(toCategory));
      const categoryPage = screen.getByRole("main", {
        name: new RegExp(category),
      });
      expect(categoryPage).toBeInTheDocument();
    })
  );
});

describe("The product cards redirect to the right products", () => {
  describe("Costumes", () => {
    ["Nine", "Ten", "Eleven", "Twelve"].forEach((product) => {
      test(`To ${product}`, async () => {
        const user = userEvent.setup();
        jest.mock("react-router-dom", () => ({
          ...jest.requireActual("react-router-dom"),
          useLoaderData: () => ({
            category: "costumes",
            sku: "mockSku",
          }),
          useOutletContext: () => ({
            categoryVisitedState: ["", mockSetCategoryIsVisited],
            setCurrentCategory: mockSetCurrentCategory,
          }),
        }));
        render(
          <RouterProvider
            router={createMemoryRouter(routes, {
              initialEntries: ["/shop", "/shop/costumes"],
            })}
          />
        );
        const toProduct = await screen.findByRole("link", {
          name: new RegExp(product, "i"),
        });
        await act(() => user.click(toProduct));
        const productPage = await screen.findByRole("main", {
          name: new RegExp(product, "i"),
        });
        expect(productPage).toBeInTheDocument();
      });
    });
  });

  describe("Figures", () => {
    ["Dalek", "Sontaran", "Zygon", "Weeping Angel"].forEach((product) => {
      test(`To ${product}`, async () => {
        const user = userEvent.setup();
        jest.mock("react-router-dom", () => ({
          ...jest.requireActual("react-router-dom"),
          useLoaderData: () => ({
            category: "figures",
            sku: "mockSku",
          }),
          useOutletContext: () => ({
            categoryVisitedState: ["", mockSetCategoryIsVisited],
            setCurrentCategory: mockSetCurrentCategory,
          }),
        }));
        render(
          <RouterProvider
            router={createMemoryRouter(routes, {
              initialEntries: ["/shop", "/shop/figures"],
            })}
          />
        );
        const toProduct = await screen.findByRole("link", {
          name: new RegExp(product, "i"),
        });
        await act(() => user.click(toProduct));
        const productPage = await screen.findByRole("main", {
          name: new RegExp(product, "i"),
        });
        expect(productPage).toBeInTheDocument();
      });
    });
  });

  describe("Sonics", () => {
    ["10th", "11th", "13th"].forEach((product) => {
      test(`To ${product}`, async () => {
        const user = userEvent.setup();
        jest.mock("react-router-dom", () => ({
          ...jest.requireActual("react-router-dom"),
          useLoaderData: () => ({
            category: "sonics",
            sku: "mockSku",
          }),
          useOutletContext: () => ({
            categoryVisitedState: ["", mockSetCategoryIsVisited],
            setCurrentCategory: mockSetCurrentCategory,
          }),
        }));
        render(
          <RouterProvider
            router={createMemoryRouter(routes, {
              initialEntries: ["/shop", "/shop/sonics"],
            })}
          />
        );
        const toProduct = await screen.findByRole("link", {
          name: new RegExp(product, "i"),
        });
        await act(() => user.click(toProduct));
        const productPage = await screen.findByRole("main", {
          name: new RegExp(product, "i"),
        });
        expect(productPage).toBeInTheDocument();
      });
    });
  });
});

describe("Entering an incorrect URL redirects to the 404 page.", () => {
  render(
    <RouterProvider
      router={createMemoryRouter(routes, {
        initialEntries: ["/incorrectURL"],
      })}
    />
  );
  const page404 = screen.queryByRole("main", { name: /404/i });
  expect(page404).toBeInTheDocument();
});

test("Adding a product adds it to the cart.", async () => {
  const user = userEvent.setup();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLoaderData: { category: "sonics", sku: "sonic-13" },
    useOutletContext: () => ({
      categoryVisitedState: ["", mockSetCategoryIsVisited],
      setCurrentCategory: mockSetCurrentCategory,
    }),
  }));
  render(
    <RouterProvider
      router={createMemoryRouter(routes, {
        initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
      })}
    />
  );
  const addToCart = await screen.findByRole("button", { name: /cart/i });
  const toCart = await screen.findByRole("link", { name: /cart/i });
  await act(() => user.click(addToCart));
  await act(() => user.click(toCart));
  const productInCart = await screen.findByRole("generic", {
    name: /Cart product: 13th Sonic/i,
  });
  expect(productInCart).toBeInTheDocument();
});

describe("Updating the product quantity in the cart works", () => {
  test("Incrementing", async () => {
    const user = userEvent.setup();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLoaderData: { category: "sonics", sku: "sonic-13" },
      useOutletContext: () => ({
        categoryVisitedState: ["", mockSetCategoryIsVisited],
        setCurrentCategory: mockSetCurrentCategory,
      }),
    }));
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
        })}
      />
    );
    const addToCart = await screen.findByRole("button", { name: /cart/i });
    const toCart = await screen.findByRole("link", { name: /cart/i });
    await act(() => user.click(addToCart));
    await act(() => user.click(toCart));
    const incrementer = await screen.findByRole("button", {
      name: /increase/i,
    });
    const input = await screen.findByTestId("quantity-input");
    await act(() => user.click(incrementer));
    expect(input).toHaveValue("2");
  });

  test("Decrementing", async () => {
    const user = userEvent.setup();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLoaderData: { category: "sonics", sku: "sonic-13" },
      useOutletContext: () => ({
        categoryVisitedState: ["", mockSetCategoryIsVisited],
        setCurrentCategory: mockSetCurrentCategory,
      }),
    }));
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
        })}
      />
    );
    const addToCart = await screen.findByRole("button", { name: /cart/i });
    const toCart = await screen.findByRole("link", { name: /cart/i });
    await act(() => user.click(addToCart));
    await act(() => user.click(toCart));
    const decrementer = await screen.findByRole("button", {
      name: /decrease/i,
    });
    const input = await screen.findByTestId("quantity-input");
    await act(() => user.click(decrementer));
    expect(input).not.toBeInTheDocument();
  });

  test("Manually adjusting", async () => {
    const user = userEvent.setup();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLoaderData: { category: "sonics", sku: "sonic-13" },
      useOutletContext: () => ({
        categoryVisitedState: ["", mockSetCategoryIsVisited],
        setCurrentCategory: mockSetCurrentCategory,
      }),
    }));
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
        })}
      />
    );
    const addToCart = await screen.findByRole("button", { name: /cart/i });
    const toCart = await screen.findByRole("link", { name: /cart/i });
    await act(() => user.click(addToCart));
    await act(() => user.click(toCart));
    const input = await screen.findByTestId("quantity-input");
    await act(() => user.click(input));
    await act(() => user.keyboard("4"));
    expect(input).toHaveValue("14");
  });
});

describe("The navbar counter works correctly.", () => {
  test("Adding one item sets up the counter.", async () => {
    const user = userEvent.setup();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLoaderData: { category: "sonics", sku: "sonic-13" },
      useOutletContext: () => ({
        categoryVisitedState: ["", mockSetCategoryIsVisited],
        setCurrentCategory: mockSetCurrentCategory,
      }),
    }));
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
        })}
      />
    );
    const addToCart = await screen.findByRole("button", { name: /cart/i });
    await act(() => user.click(addToCart));
    const counter = await screen.findByDisplayValue("1");
    expect(counter).toHaveValue("1");
  });
  test("Adding several identical items does not increase the counter.", async () => {
    const user = userEvent.setup();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useLoaderData: { category: "sonics", sku: "sonic-13" },
      useOutletContext: () => ({
        categoryVisitedState: ["", mockSetCategoryIsVisited],
        setCurrentCategory: mockSetCurrentCategory,
      }),
    }));
    render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ["/shop", "/shop/sonics", "/shop/sonics/sonic-13"],
        })}
      />
    );
    const addToCart = await screen.findByRole("button", { name: /cart/i });
    await act(() => user.click(addToCart));
    await act(() => user.click(addToCart));
    const counter = await screen.findByRole("generic", {
      name: /products in cart/,
    });
    expect(counter).not.toHaveTextContent("2");
    expect(counter).toHaveTextContent("1");
  });
});
