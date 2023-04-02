import "./ProductForm.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { sendProductToCart } from "../../../shared/utils/handlers";
import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";
import ProductCartButton from "../__CartButton/ProductCartButton";

const ProductForm = ({ sku }) => {
  const [cart, setCart] = useOutletContext().cartState;
  const [value, setValue] = useState(1);
  return (
    <form
      className="Product__Form"
      onSubmit={(event) => {
        event.preventDefault();
        sendProductToCart(event, sku, { cart, setCart });
      }}
    >
      <QuantityUpdater valueState={{ value, setValue }} />
      <ProductCartButton />
    </form>
  );
};

export default ProductForm;
