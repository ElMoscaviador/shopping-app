import { render, screen } from "@testing-library/react";
import ItemThumbnail from "./ItemThumbnail";
import { data as categoriesData } from "../Shop/data";
import { categoryIds } from "../../jest/mockedCategories";
import { BrowserRouter } from "react-router-dom";

const customData = categoriesData["itemsData"][categoryIds[0]][0];

describe("The item thumbnail is rendered correctly", () => {
  test("The main wrapper is rendered.", async () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const mainWrapper = screen.getByRole("generic", { name: "item-thumbnail" });
    expect(mainWrapper).toBeInTheDocument();
  });
  test("The picture wrapper is rendered.", async () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const pictureWrapper = screen.getByRole("generic", {
      name: "thumbnail-picture-wrapper",
    });
    expect(pictureWrapper).toBeInTheDocument();
  });
  test("The picture is rendered.", async () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const picture = screen.getByRole("img", { name: "thumbnail-picture" });
    expect(picture).toBeInTheDocument();
  });
  test("The name is rendered.", async () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const name = screen.getByRole("link", { name: "thumbnail-name" });
    expect(name).toBeInTheDocument();
  });
  test("The price is rendered.", async () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const price = screen.getByTestId("thumbnail-price");
    expect(price).toBeInTheDocument();
  });
});

describe("The item thumbnail contents are identical to the input data", () => {
  test("The picture source", () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const picture = screen.getByRole("img", { name: "thumbnail-picture" });
    expect(picture.src).toContain("thumbnail");
  });
  test("The name", () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const name = screen.getByRole("link", { name: "thumbnail-name" });
    expect(name).toHaveTextContent("name 1");
  });
  test("The price", () => {
    render(
      <ItemThumbnail categoryId={categoryIds[0]} itemData={customData} />,
      { wrapper: BrowserRouter }
    );
    const price = screen.getByTestId("thumbnail-price");
    expect(price).toHaveTextContent("$5.40");
  });
});
