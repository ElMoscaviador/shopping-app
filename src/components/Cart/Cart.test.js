import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

test("If it is empty, the cart displays a title and a placeholder only.", () => {
  render(<Cart />);
  const mainWrapper = screen.getByRole("main", { name: "cart" });
  const title = screen.getByRole("heading", { name: "cart-title" });
  const placeholder = screen.getByText(/is empty/);
  expect(mainWrapper).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
});
