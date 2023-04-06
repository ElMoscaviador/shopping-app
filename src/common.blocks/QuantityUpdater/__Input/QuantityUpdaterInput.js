import "./QuantityUpdaterInput.css";

const QuantityUpdaterInput = ({ quantity, setValue }) => {
  return (
    <input
      aria-labelledby="quantity"
      className="Quantity-Updater__Input"
      min={1}
      name="quantity"
      onChange={setValue}
      data-testid="quantity-input"
      type="numeric"
      pattern={'[0-9]+'}
      value={quantity}
    />
  );
};

export default QuantityUpdaterInput;
