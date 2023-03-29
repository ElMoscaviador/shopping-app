const EmptyCart = () => {
  return (
    <div aria-label="cart empty wrapper"
    className="cart__empty">
     <img
        alt="empty cart"
        aria-label="cart empty"
        className="cart__empty__image"
        src={require("../../assets/cart/empty.png")}
      />
      <p aria-label="cart empty text" className="cart__empty__text">
        YOUR CART IS EMPTY.
      </p>
    </div>
  );
};

export default EmptyCart;
