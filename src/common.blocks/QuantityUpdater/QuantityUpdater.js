import "./QuantityUpdater.css";
import QuantityUpdaterButton from "./__Button/QuantityUpdaterButton";
import QuantityUpdaterInput from "./__Input/QuantityUpdaterInput";

const QuantityUpdater = ({ quantity, quantitySetters }) => {
  const { add, decrease, manual } = quantitySetters;

  return (
    <div className="Quantity-Updater">
      <QuantityUpdaterButton sign="-" setValue={decrease} />
      <QuantityUpdaterInput setValue={manual} quantity={quantity} />
      <QuantityUpdaterButton sign="+" setValue={add} />
    </div>
  );
};

export default QuantityUpdater;
