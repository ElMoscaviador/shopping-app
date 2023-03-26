const QuantityModifierButton = ({ sign, setValue }) => {
  return (
    <button
      aria-label="quantity modifier button"
      className="quantity-modifier__button"
      type="button"
      onClick={setValue}
    >
      <div
        aria-label="gradient clip background"
        className="gradient-clip-background"
      >
        <span aria-label="sign" className="sign">
          {sign}
        </span>
      </div>
    </button>
  );
};

export default QuantityModifierButton;
