import { useEffect } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { calculatePrice } from "../handlers";
import { updateItemQuantityInCart } from "../handlers";
import { fetchSpecificItem } from "../database";
import QuantityModifierButton from "../QuantityModifier/QuantityModifierButton";
import NavButtons from "../NavButtons/NavButtons";

const FullCart = () => {
  const { cartState, setCurrentCategory } = useOutletContext();
  const [cart, setCart] = cartState;
  const maxItemsPerPage = 3;
  const totalNumberOfPages = Math.ceil(cart.length / maxItemsPerPage);

  const [searchParams] = useSearchParams();

  function currentItemsToDisplay() {
    const currentPage = Number(searchParams.get("page") || 1);
    const startIndex = (currentPage - 1) * maxItemsPerPage;
    const endIndex = startIndex + maxItemsPerPage;
    return cart.slice(startIndex, endIndex);
  }

  useEffect(() => setCurrentCategory("CART"), []);

  return (
    <>
      {totalNumberOfPages > 1 && (
        <NavButtons
          currentPage={Number(searchParams.get("page") || 1)}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
      {currentItemsToDisplay().map((itemInCart) => {
        const { quantity, sku } = itemInCart;
        const currentItemData = fetchSpecificItem(sku);
        return (
          <div aria-label="cart item box" className="cart__item-box" key={sku}>
            <div
              aria-label="item thumbnail wrapper"
              className="item-thumbnail__wrapper"
            >
              <div className="item-thumbnail__front" />
              <img
                alt="item thumbnail"
                className={`item-thumbnail ${sku}`}
                src={require(`../../assets/products/thumbnail/${sku}.png`)}
              />
              <div className="item-thumbnail__back" />
            </div>
            <div aria-label="cart item info" className="cart__item__info">
              <h3 aria-label="cart item name" className="cart__item__name">
                {currentItemData.name.full.toUpperCase()}
              </h3>
              <p aria-label="cart item price" className="cart__item__price">
                £{calculatePrice(currentItemData.price, quantity)}
              </p>
              <div className="quantity-wrapper" aria-label="quantity-wrapper">
                <QuantityModifierButton
                  sign="-"
                  setValue={() => {
                    updateItemQuantityInCart(quantity - 1, sku, setCart);
                  }}
                />
                <input
                  min={0}
                  value={quantity}
                  type="numeric"
                  className="quantity-input"
                  aria-label="quantity"
                  onChange={(event) =>
                    updateItemQuantityInCart(
                      Number(event.target.value),
                      sku,
                      setCart
                    )
                  }
                />
                <QuantityModifierButton
                  sign="+"
                  setValue={() => {
                    updateItemQuantityInCart(quantity + 1, sku, setCart);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FullCart;
