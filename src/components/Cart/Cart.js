import { useOutletContext } from "react-router-dom";
import FullCartView from "./FullCartView";
import EmptyCartView from "./EmptyCartView";

const Cart = () => {
  const [cart] = useOutletContext()["cartState"];
  return (
    <main className="cart" aria-label="cart">
      <h1 className="cart__title" aria-label="cart-title">
        Your cart
      </h1>
      {!!cart.length ? <FullCartView /> : <EmptyCartView />}
    </main>
  );
};

export default Cart;
