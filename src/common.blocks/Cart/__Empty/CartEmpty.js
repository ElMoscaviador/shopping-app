import "./CartEmpty.css";
import CartEmptyImage from "../__EmptyImage/CartEmptyImage";
import CartEmptyText from "../__EmptyText/CartEmptyText";

const CartEmpty = () => {
  return (
    <div className="Cart__Empty">
      <CartEmptyImage />
      <CartEmptyText />
    </div>
  );
};

export default CartEmpty;
