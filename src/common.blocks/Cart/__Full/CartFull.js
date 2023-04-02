import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import {
  calculatePrice,
  updateItemQuantityInCart,
} from "../../../shared/utils/handlers";
import { fetchSingleProduct } from "../../../shared/utils/database";
import QuantityModifierButton from "../QuantityModifier/QuantityModifierButton";
import NavArrows from "../../NavArrows/NavArrows";
import currentProductsToDisplay from "./handlers";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";
import ProductCard from "../../ProductCard/ProductCard";
import CartElement from "../__Element/CartElement";

const CartFull = () => {
  const { cartState, setCurrentCategory } = useOutletContext();
  const [cart, setCart] = cartState;
  const maxProductsPerPage = 3;
  const totalNumberOfPages = Math.ceil(cart.length / maxProductsPerPage);
  const [searchParams] = useSearchParams();

  function currentProductsToDisplay() {
    const currentPage = Number(searchParams.get("page") || 1);
    const startIndex = (currentPage - 1) * maxProductsPerPage;
    const endIndex = startIndex + maxProductsPerPage;
    return cart.slice(startIndex, endIndex);
  }

  useEffect(() => setCurrentCategory("CART"), []);

  return (
    <main className="cart__full">
      {totalNumberOfPages > 1 && (
        <NavArrows
          currentPage={Number(searchParams.get("page") || 1)}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      {currentProductsToDisplay().map((productInCart) => {
        const { quantity, sku } = productInCart;
        const currentProductInCart = fetchSingleProduct(sku);
        return <CartElement />;
      })}
    </main>
  );
};

export default CartFull;
