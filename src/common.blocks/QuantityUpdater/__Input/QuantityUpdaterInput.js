import "./QuantityUpdaterInput.css";

const QuantityUpdaterInput = ({ quantity, setValue }) => {
  return (
    <input
      aria-labelledby="quantity"
      className="Quantity-Updater__Input"
      min={1}
      name="quantity"
      onChange={setValue}
      type="numeric"
      value={quantity}
    />
  );
};

export default QuantityUpdaterInput;
