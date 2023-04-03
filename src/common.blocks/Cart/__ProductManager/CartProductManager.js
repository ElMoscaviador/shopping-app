import "./CartProductManager.css";
import ProductTitle from "../../Product/__Title/ProductTitle";
import ProductPrice from "../../Product/__Price/ProductPrice";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";
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
      <QuantityUpdater
        quantity={quantity}
        quantitySetters={{
          add: () => updateQuantity(quantity + 1),
          decrease: () => updateQuantity(quantity - 1),
          manual: (event) => updateQuantity(Number(event.target.value)),
        }}
      />
    </section>
  );
};

export default CartProductManager;
