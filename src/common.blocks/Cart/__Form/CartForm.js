import QuantityUpdater from "../../QuantityUpdater/QuantityUpdater";

const CartForm = ({ quantity, updateQuantity }) => {
  return (
    <form
      aria-label="Manually update product quantity"
      id="quantity"
      className="Cart__Form"
    >
      <QuantityUpdater
        quantity={quantity}
        quantitySetters={{
          add: () => {
            updateQuantity(quantity + 1)},
          decrease: () => updateQuantity(quantity - 1),
          manual: (event) => updateQuantity(Number(event.target.value)),
        }}
      />
    </form>
  );
};

export default CartForm;
