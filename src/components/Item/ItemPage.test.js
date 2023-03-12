import { render, screen } from "@testing-library/react";
import ItemPage from "./ItemPage";
import { data as categoriesData } from "../Shop/data";
import { categoryIds as mockCategoryIds } from "../../jest/mockedCategories";
import { BrowserRouter } from "react-router-dom";

const mockCustomData = categoriesData["itemsData"][mockCategoryIds[0]][0];

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      state: {
        name: mockCustomData.name,
        price: mockCustomData.price,
        img: { page: [mockCustomData.img.page[0], mockCustomData.img.page[1]] },
      },
    }),
    useLoaderData: () => mockCategoryIds[0],
  };
});

describe("The item page renders correctly.", () => {
  test("The main wrapper", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const mainWrapper = screen.getByTestId(`item-page-${mockCategoryIds[0]}`);
    expect(mainWrapper).toBeInTheDocument();
  });

  test("The name", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const name = screen.getByRole("heading", { name: "item-page-name" });
    expect(name).toBeInTheDocument();
  });
  test("The image", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const image = screen.getByRole("img", { name: "item-page-image" });
    expect(image).toBeInTheDocument();
  });
  test("The price", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const price = screen.getByTestId("item-page-price");
    expect(price).toBeInTheDocument();
  });
  test("The Add To Cart button", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const addToCart = screen.getByRole("button", { name: "to-cart" });
    expect(addToCart).toBeInTheDocument();
  });
  test("The Buy Now button", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const shopNow = screen.getByRole("button", { name: "buy-now" });
    expect(shopNow).toBeInTheDocument();
  });
  test("The quantity input", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const quantityInput = screen.getByRole("textbox", { name: "quantity" });
    expect(quantityInput).toBeInTheDocument();
  });
});