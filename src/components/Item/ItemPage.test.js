import { render, screen } from "@testing-library/react";
import ItemPage from "./ItemPage";
import { data as categoriesData } from "../Shop/data";
import { categoryIds as mockCategoryIds } from "../../jest/mockedCategories";

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
    useLoaderData: () => ({
      productId: mockCustomData.name,
      categoryId: mockCategoryIds[0],
    }),
  };
});

describe("The item page renders correctly.", () => {
  test("The main wrapper", () => {
    render(<ItemPage />);
    const mainWrapper = screen.getByTestId(`item-page-${mockCategoryIds[0]}`);
    expect(mainWrapper).toBeInTheDocument();
  });

  test("The name", () => {
    render(<ItemPage />);
    const name = screen.getByRole("heading", { name: "item-page-name" });
    expect(name).toBeInTheDocument();
  });
  test("The image", () => {
    render(<ItemPage />);
    const image = screen.getByRole("img", { name: "item-page-image" });
    expect(image).toBeInTheDocument();
  });
  test("The price", () => {
    render(<ItemPage />);
    const price = screen.getByTestId("item-page-price");
    expect(price).toBeInTheDocument();
  });
  test("The Add To Cart button", () => {
    render(<ItemPage />);
    const addToCart = screen.getByRole("button", { name: "add-to-cart" });
    expect(addToCart).toBeInTheDocument();
  });
  test("The Buy Now button", () => {
    render(<ItemPage />);
    const shopNow = screen.getByRole("button", { name: "buy-now" });
    expect(shopNow).toBeInTheDocument();
  });
  test("The quantity input", () => {
    render(<ItemPage />);
    const quantityInput = screen.getByRole("textbox", { name: "quantity" });
    expect(quantityInput).toBeInTheDocument();
  });
  test("The increment button", () => {
    render(<ItemPage />);
    const increment = screen.getByRole("button", { name: "increment" });
    expect(increment).toBeInTheDocument();
  });
  test("The decrement button", () => {
    render(<ItemPage />);
    const decrement = screen.getByRole("button", { name: "increment" });
    expect(decrement).toBeInTheDocument();
  });
});
