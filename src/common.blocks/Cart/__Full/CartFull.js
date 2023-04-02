import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { fetchSingleProduct } from "../../../shared/utils/database";
import NavArrows from "../../NavArrows/NavArrows";
import CartElement from "../__Element/CartElement";

const CartFull = () => {
  const { cartState, setCurrentCategory } = useOutletContext();
  const [cart] = cartState;
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
    <main className="Cart__Full">
      {totalNumberOfPages > 1 && (
        <NavArrows
          currentPage={Number(searchParams.get("page") || 1)}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      {currentProductsToDisplay().map((productInCart) => {
        const { sku } = productInCart;
        const currentProduct = fetchSingleProduct(sku);
        return <CartElement product={currentProduct} />;
      })}
    </main>
  );
};

export default CartFull;
