import {
  itemInCart,
  returnCartCopyWithoutItem,
  updateItemInCart,
} from "../handlers";

const calculatePrice = (price, quantity) => {
  return Math.round(price * quantity * 100) / 100;
};

const updateItemQuantityInCart = (event, sku, setCart) => {
  const quantity = Number(event.target.value);
  setCart((previousCart) => {
    if (quantity === 0) {
      const cartWithoutMatchingItem = returnCartCopyWithoutItem(
        previousCart,
        Number(sku)
      );
      return [...cartWithoutMatchingItem];
    } else {
      const itemIsInCart = itemInCart(previousCart, sku);
      const cartWithUpdatedItem = updateItemInCart(
        previousCart,
        itemIsInCart,
        quantity,
        true
      );
      return [...cartWithUpdatedItem];
    }
  });
};

export { calculatePrice, updateItemQuantityInCart };
