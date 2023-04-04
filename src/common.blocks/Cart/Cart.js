import "./Cart.css";
import { useOutletContext } from "react-router-dom";
import CartEmpty from "./__Empty/CartEmpty";
import CartFull from "./__Full/CartFull";

const Cart = () => {
  const [cart] = useOutletContext()["cartState"];
  return (
    <div aria-label="Cart page" className="Cart">
      {!!cart.length ? <CartFull /> : <CartEmpty />}
    </div>
  );
};

export default Cart;
