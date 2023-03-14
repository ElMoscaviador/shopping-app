import { render, screen } from "@testing-library/react";
import ItemPage from "./ItemPage";
import { mockItems } from "../../../jest/mockData";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLoaderData: () => mockItems[0].sku,
    useOutletContext: () => {
      const cart = [];
      const setCart = () => jest.fn();
      const fetchItems = () => {
        return {
          category: mockItems[0].category,
          name: mockItems[0].name,
          price: mockItems[0].price,
          img: {
            thumbnail: mockItems[0].img.thumbnail,
            page: [mockItems[0].img.page[0], mockItems[0].img.page[1]],
          },
        };
      };
      return { fetchItems, cartState: [cart, setCart] };
    },
  };
});

describe("The item page renders correctly.", () => {
  test("The main wrapper", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const mainWrapper = screen.getByTestId(`item-page-${mockItems[0].sku}`);
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
    const addToCart = screen.getByRole("button", { name: "add-to-cart" });
    expect(addToCart).toBeInTheDocument();
  });
  test("The quantity input", () => {
    render(<ItemPage />, { wrapper: BrowserRouter });
    const quantityInput = screen.getByRole("spinbutton", { name: "quantity" });
    expect(quantityInput).toBeInTheDocument();
  });
});
