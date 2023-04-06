import "./CartProduct.css";
import ProductCard from "../../ProductCard/ProductCard";
import CartProductManager from "../__ProductManager/CartProductManager";

const CartProduct = ({ quantity, product, setCart }) => {
  return (
    <div
      aria-label={`Cart product: ${product.name.short}`}
      className="Cart__Product"
    >
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

export default CartProduct;
