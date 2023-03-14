import { render, screen } from "@testing-library/react";
import ItemThumbnail from "./ItemThumbnail";
import { mockItems } from "../../../jest/mockData";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useOutletContext: () => {
      const fetchItems = () => {
        return {
          category: mockItems[0].category,
          name: mockItems[0].name,
          price: mockItems[0].price,
          img: { thumbnail: mockItems[0].img.thumbnail },
        };
      };
      return { fetchItems };
    },
  };
});

describe("The item thumbnail is rendered correctly", () => {
  test("The main wrapper is rendered.", async () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const mainWrapper = screen.getByRole("generic", { name: "item-thumbnail" });
    expect(mainWrapper).toBeInTheDocument();
  });
  test("The picture wrapper is rendered.", async () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const pictureWrapper = screen.getByRole("generic", {
      name: "thumbnail-picture-wrapper",
    });
    expect(pictureWrapper).toBeInTheDocument();
  });
  test("The picture is rendered.", async () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const picture = screen.getByRole("img", { name: "thumbnail-picture" });
    expect(picture).toBeInTheDocument();
  });
  test("The name is rendered.", async () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const name = screen.getByRole("link", { name: "thumbnail-name" });
    expect(name).toBeInTheDocument();
  });
  test("The price is rendered.", async () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const price = screen.getByTestId("thumbnail-price");
    expect(price).toBeInTheDocument();
  });
});

describe("The item thumbnail contents are identical to the input data", () => {
  test("The picture source", () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const picture = screen.getByRole("img", { name: "thumbnail-picture" });
    expect(picture.src).toContain("thumbnail");
  });
  test("The name", () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const name = screen.getByRole("link", { name: "thumbnail-name" });
    expect(name).toHaveTextContent("name 1");
  });
  test("The price", () => {
    render(<ItemThumbnail sku={mockItems[0].sku} />, {
      wrapper: BrowserRouter,
    });
    const price = screen.getByTestId("thumbnail-price");
    expect(price).toHaveTextContent("$5.40");
  });
});
