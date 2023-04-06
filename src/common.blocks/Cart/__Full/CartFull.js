import "./CartFull.css";
import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import currentProductsToDisplay from "./handlers";
import { fetchSingleProduct } from "../../../common.shared/database";
import CartProduct from "../__Product/CartProduct";
import NavArrows from "../../NavArrows/NavArrows";

const CartFull = () => {
  const { cartState, setCurrentCategory } = useOutletContext();
  const [cart, setCart] = cartState;
  const maxProductsPerPage = 3;
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);
  const totalNumberOfPages = Math.ceil(cart.length / maxProductsPerPage);
  useEffect(() => setCurrentCategory("CART"), []);

  return (
    <main className="Cart__Full">
      {totalNumberOfPages > 1 && (
        <NavArrows
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      {currentProductsToDisplay(cart, currentPage, maxProductsPerPage).map(
        (productInCart) => {
          return (
          <CartProduct
            key={productInCart.sku}
            quantity={productInCart.quantity}
            product={fetchSingleProduct(productInCart.sku)}
            setCart={setCart}
          />
        )}
      )}
    </main>
  );
};

export default CartFull;
