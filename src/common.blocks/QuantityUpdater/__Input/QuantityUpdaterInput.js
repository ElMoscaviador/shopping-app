import "./QuantityUpdaterInput.css";

const QuantityUpdaterInput = ({ valueState }) => {
  const { value, setValue } = valueState;
  return (
    <input
      className="Quantity-Updater__Input"
      min={1}
      name="quantity"
      onChange={(event) => setValue(event.target.value)}
      type="numeric"
      value={value}
    />
  );
};

export default QuantityUpdaterInput;
