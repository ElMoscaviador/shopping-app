import "./CartElement.css";
import ProductCard from "../../ProductCard/ProductCard";
import CartProductManager from "../__ProductManager/CartProductManager";

const CartElement = ({ quantity, product, setCart }) => {
  return (
    <div className="Cart__Element">
      <ProductCard
        product={product}
        additionalClasses={{ modifiers: ["--location--cart"] }}
      />
      <CartProductManager
        quantity={quantity}
        product={product}
        setCart={setCart}
      />
    </div>
  );
};

export default CartElement;
