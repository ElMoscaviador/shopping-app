import CartEmptyImage from "../__EmptyImage/CartEmptyImage";
import CartEmptyText from "../__EmptyText/CartEmptyText";

const CartEmpty = () => {
  return (
    <div className="cart__empty">
      <CartEmptyImage />
      <CartEmptyText />
    </div>
  );
};

export default CartEmpty;
