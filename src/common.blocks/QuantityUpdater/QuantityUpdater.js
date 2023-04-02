import "./QuantityUpdater.css";
import QuantityUpdaterButton from "./__Button/QuantityUpdaterButton";
import QuantityUpdaterInput from "./__Input/QuantityUpdaterInput";

const QuantityUpdater = ({ valueState }) => {
  const { setValue } = valueState;

  return (
    <div className="Quantity-Updater">
      <QuantityUpdaterButton
        sign="-"
        setValue={() => setValue((prev) => (prev === 1 ? 1 : prev - 1))}
      />
      <QuantityUpdaterInput valueState={valueState} />
      <QuantityUpdaterButton
        sign="+"
        setValue={() => setValue((prev) => prev + 1)}
      />
    </div>
  );
};

export default QuantityUpdater;
