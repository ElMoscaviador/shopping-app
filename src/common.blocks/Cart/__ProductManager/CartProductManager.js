import "./CartProductManager.css";
import CartForm from "../__Form/CartForm";
import ProductTitle from "../../Product/__Title/ProductTitle";
import ProductPrice from "../../Product/__Price/ProductPrice";

import { curry } from "../../../common.shared/utils";
import { calculatePrice, updateProductQuantityInCart } from "./handlers";

const CartProductManager = ({ quantity, product, setCart }) => {
  const updateQuantity = curry(updateProductQuantityInCart)(
    product.sku,
    setCart
  );
  return (
    <section className="Cart__Product-Manager">
      <ProductTitle
        additionalClasses={{ modifiers: ["--location--cart"] }}
        title={product.name.short}
      />
      <ProductPrice
        additionalClasses={{ modifiers: ["--location--cart"] }}
        price={calculatePrice(product.price, quantity)}
      />
      <CartForm quantity={quantity} updateQuantity={updateQuantity} />
    </section>
  );
};

export default CartProductManager;
