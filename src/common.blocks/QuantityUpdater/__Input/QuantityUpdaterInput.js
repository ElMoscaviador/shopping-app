import "./QuantityUpdaterInput.css";

const QuantityUpdaterInput = ({ quantity, setValue }) => {
  return (
    <input
      className="Quantity-Updater__Input"
      min={1}
      name="quantity"
      onChange={(event) => setValue(event.target.value)}
      type="numeric"
      value={quantity}
    />
  );
};

export default QuantityUpdaterInput;