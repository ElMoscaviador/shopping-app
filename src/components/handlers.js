const itemInCart = (cart, sku) => cart.find((item) => item.sku === sku);

const updateItemInCart = (cart, itemIsInCart, quantity, isCart) =>
  cart.map((item) => {
    return item === itemIsInCart
      ? {
          sku: item.sku,
          quantity: isCart ? quantity : quantity + item.quantity,
        }
      : item;
  });

const returnCartCopyWithoutItem = (cart, sku) =>
  cart.filter((item) => item !== itemInCart(cart, sku));

export { itemInCart, returnCartCopyWithoutItem, updateItemInCart };
