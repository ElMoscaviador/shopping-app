import QuantityModifierButton from "./QuantityModifierButton";

const QuantityModifier = ({ setValue, value }) => {
  return (
    <div className="item-page__quantity-wrapper" aria-label="quantity-wrapper">
      <QuantityModifierButton
        sign="-"
        setValue={() => setValue((prev) => (prev === 1 ? 1 : prev - 1))}
      />
      <input
        min={1}
        type="numeric"
        className="quantity-input"
        aria-label="quantity"
        name="quantity"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <QuantityModifierButton
        sign="+"
        setValue={() => setValue((prev) => prev + 1)}
      />
    </div>
  );
};

export default QuantityModifier;
