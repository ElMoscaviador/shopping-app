import { useOutletContext } from "react-router-dom";
import EmptyCart from "./__Empty/CartEmpty";
import FullCart from "./__Full/CartFull";

const Cart = () => {
  const [cart] = useOutletContext()["cartState"];
  return (
    <div className="cart">
      {!!cart.length ? <FullCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
