import { useOutletContext } from "react-router-dom";
import { calculatePrice } from "./handlers";
import { updateItemQuantityInCart } from "./handlers";

const FullCartView = () => {
  const { fetchItems, cartState } = useOutletContext();
  const [cart, setCart] = cartState;

  return cart.map((itemInCart) => {
    const { quantity, sku } = itemInCart;
    const currentItemData = fetchItems("sku", sku);
    const { name, price, img } = currentItemData;
    return (
      <div className="cart__item-box" aria-label="cart-item-box" key={sku}>
        <img
          className="item-thumbnail__picture"
          aria-label="thumbnail-picture"
          alt="thumbnail"
          src={img.thumbnail}
        />
        <div className="item-box__text-group" aria-label="item-box-text-group">
          <h3 className="item-box__title" aria-label="item-box-title">
            {name}
          </h3>
          <p
            className="item-box__price"
            aria-label="item-box-price"
            data-testid="item-box-price"
          >
            ${calculatePrice(price, quantity)}
          </p>
          <input
            min={0}
            value={quantity}
            type="number"
            className="quantity-input"
            aria-label="quantity"
            onChange={(event) =>
              updateItemQuantityInCart(event, sku, setCart)
            }
          />
        </div>
      </div>
    );
  });
};

export default FullCartView;
