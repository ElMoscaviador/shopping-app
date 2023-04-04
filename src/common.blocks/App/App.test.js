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