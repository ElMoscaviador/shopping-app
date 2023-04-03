import "./ProductForm.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import sendProductToCart from "./handlers";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";
import ProductCartButton from "../__CartButton/ProductCartButton";

const ProductForm = ({ sku }) => {
  const [cart, setCart] = useOutletContext().cartState;
  const [quantity, setQuantity] = useState(1);
  return (
    <form
      className="Product__Form"
      onSubmit={(event) => {
        event.preventDefault();
        sendProductToCart(event, sku, { cart, setCart });
      }}
    >
      <QuantityUpdater
        quantity={quantity}
        quantitySetters={{
          add: () => setQuantity((prev) => prev + 1),
          decrease: () => setQuantity((prev) => (prev === 1 ? 1 : prev - 1)),
          manual: (event) => setQuantity(event.target.value),
        }}
      />
      <ProductCartButton />
    </form>
  );
};

export default ProductForm;
