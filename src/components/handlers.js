function calculatePrice(price, quantity) {
  return Math.round(price * quantity * 100) / 100;
}

function fetchQuantity(form) {
  return Number(new FormData(form).get("quantity"));
}

function generateCatchPhrase() {
  const catchPhrases = ["Allons-y", `Don't Blink`, "Kerblam"];
  const randomPhrase =
    catchPhrases[Math.floor(Math.random() * catchPhrases.length)];
  return randomPhrase;
}

function itemInCart(cart, sku) {
  return cart.find((item) => item.sku === sku);
}

function returnCartCopyWithoutItem(cart, sku) {
  return cart.filter((item) => item !== itemInCart(cart, sku));
}

function sendItemToCart(event, sku, { cart, setCart }) {
  const itemIsInCart = itemInCart(cart, sku);
  const quantity = fetchQuantity(event.target);
  if (itemIsInCart) {
    const cartWithUpdatedItem = updateItemInCart(cart, itemIsInCart, quantity);
    setCart(cartWithUpdatedItem);
  } else {
    setCart((previousCart) => [
      ...previousCart,
      { sku, quantity: fetchQuantity(event.target) },
    ]);
  }
}

function updateItemInCart(cart, itemIsInCart, quantity, isCart) {
  return cart.map((item) => {
    return item === itemIsInCart
      ? {
          sku: item.sku,
          quantity: isCart ? quantity : quantity + item.quantity,
        }
      : item;
  });
}

function updateItemQuantityInCart(quantity, sku, setCart) {
  console.log(quantity)
  setCart((previousCart) => {
    if (quantity === 0) {
      const cartWithoutMatchingItem = returnCartCopyWithoutItem(
        previousCart,
        sku
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
}

export {
  calculatePrice,
  generateCatchPhrase,
  itemInCart,
  returnCartCopyWithoutItem,
  sendItemToCart,
  updateItemInCart,
  updateItemQuantityInCart,
};
