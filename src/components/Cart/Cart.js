import { useOutletContext } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

const Cart = () => {
  const [cart] = useOutletContext()["cartState"];
  return (
    <main aria-label="cart" className="cart">
      {!!cart.length ? <FullCart /> : <EmptyCart />}
    </main>
  );
};

export default Cart;
