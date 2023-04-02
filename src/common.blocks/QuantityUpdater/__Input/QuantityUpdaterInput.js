const QuantityUpdaterInput = ({ valueState }) => {
  const { value, setValue } = valueState;
  return (
    <input
      className="quantity-updater__input"
      min={1}
      name="quantity-updater__input"
      onChange={(event) => setValue(event.target.value)}
      type="numeric"
      value={value}
    />
  );
};

export default QuantityUpdaterInput;
