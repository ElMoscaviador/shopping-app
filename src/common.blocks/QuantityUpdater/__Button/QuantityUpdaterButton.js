import "./QuantityUpdaterButton.css";
import GradientContainer from "../../GradientContainer/GradientContainer";
import QuantityUpdaterSign from "../__Sign/QuantityUpdaterSign";

const QuantityUpdaterButton = ({ sign, setValue }) => {
  return (
    <button
      aria-label={`${sign === "+" ? "Increase" : "Decrease"} product quantity`}
      className="Quantity-Updater__Button"
      type="button"
      onClick={setValue}
    >
      <GradientContainer>
        <QuantityUpdaterSign sign={sign} />
      </GradientContainer>
    </button>
  );
};

export default QuantityUpdaterButton;
