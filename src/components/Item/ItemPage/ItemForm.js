import sendItemToCart from "./handlers";
import { useOutletContext } from "react-router-dom";

const ItemForm = ({sku}) => {
  const [cart, setCart] = useOutletContext()["cartState"];

  return (
    <form
      className="item-page__form"
      aria-label="item-page-form"
      onSubmit={(event) => {
        event.preventDefault();
        sendItemToCart(event, sku, { cart, setCart });
      }}
    >
      <input
        min={1}
        type="number"
        className="quantity-input"
        aria-label="quantity"
        name="quantity"
        defaultValue={1}
      />
      <button
        className="item-page__add-to-cart"
        aria-label="add-to-cart"
        type="submit"
      >
        Add to cart
      </button>
    </form>
  );
};

export default ItemForm;
