import { useOutletContext } from "react-router-dom";
import { data } from "../Shop/data";

const Cart = () => {
  const [cart, setCart] = useOutletContext()["cartState"];
  const { itemsData } = data;
  const calculatePrice = (price, quantity) =>
    Math.round(price * quantity * 100) / 100;

  return (
    <main className="cart" aria-label="cart">
      <h1 className="cart__title" aria-label="cart-title">
        Your cart
      </h1>
      {!!cart.length ? (
        cart.map((item) => {
          const currentItem = itemsData[item.category].find(
            (product) => product.name === item.name
          );
          return (
            <div
              className="cart__item-box"
              aria-label="cart-item-box"
              key={item.name}
            >
              <img
                className="item-thumbnail__picture"
                aria-label="thumbnail-picture"
                alt="thumbnail"
                src={currentItem.thumbnail}
              />
              <div
                className="item-box__text-group"
                aria-label="item-box-text-group"
              >
                <h3 className="item-box__title" aria-label="item-box-title">
                  {item.name}
                </h3>
                <p className="item-box__price" aria-label="item-box-price">
                  ${calculatePrice(currentItem.price, item.quantity)}
                </p>
                <input
                  min={0}
                  value={item.quantity}
                  type="number"
                  className="quantity-input"
                  aria-label="quantity"
                  onChange={(event) =>
                    setCart((previousCart) => {
                      const matchingItem = previousCart.find(
                        (cartItem) => cartItem.name === item.name
                      );
                      const withoutMatch = previousCart.filter(
                        (cartItem) => cartItem.name !== matchingItem.name
                      );
                      return [
                        ...withoutMatch,
                        {
                          name: matchingItem.name,
                          category: matchingItem.category,
                          quantity: event.target.value,
                        },
                      ];
                    })
                  }
                />
              </div>
            </div>
          );
        })
      ) : (
        <p
          className="cart__empty-placeholder"
          aria-label="cart-empty-placeholder"
          role="generic"
        >
          Your cart is empty!
        </p>
      )}
    </main>
  );
};

export default Cart;
