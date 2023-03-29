import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { sendItemToCart } from "../handlers";
import QuantityModifier from "../QuantityModifier/QuantityModifierButton";

const ItemForm = ({ sku }) => {
  const [cart, setCart] = useOutletContext().cartState;
  const [value, setValue] = useState(1);
  return (

      <form
        className="item-page__form"
        aria-label="item-page-form"
        onSubmit={(event) => {
          event.preventDefault();
          sendItemToCart(event, sku, { cart, setCart });
        }}
      >
        <div className="quantity-wrapper" aria-label="quantity-wrapper">
          <QuantityModifier
            sign="-"
            setValue={() => setValue((prev) => (prev === 1 ? 1 : prev - 1))}
          />
          <input
            min={1}
            type="numeric"
            className="quantity-input"
            aria-label="quantity"
            name="quantity"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <QuantityModifier
            sign="+"
            setValue={() => setValue((prev) => prev + 1)}
          />
        </div>
        <button
          className="item-page__add-to-cart"
          aria-label="add-to-cart"
          type="submit"
        >
          <div
            aria-label="gradient clip background"
            className="gradient-clip-background"
          >
            ADD TO CART
          </div>
        </button>
      </form>
);
};

export default ItemForm;
