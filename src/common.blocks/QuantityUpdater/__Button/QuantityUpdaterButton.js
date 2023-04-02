import "./QuantityUpdaterButton.css";
import GradientContainer from "../../GradientContainer/GradientContainer";
import QuantityUpdaterSign from "../__Sign/QuantityUpdaterSign";

const QuantityUpdaterButton = ({ sign, setValue }) => {
  return (
    <button
      className="Quantity-Updater__Button"
      type="button"
      onClick={setValue}
    >
      <GradientContainer
        additionalClasses={{
          modifiers: ["--background-gradient"],
        }}
      >
        <QuantityUpdaterSign sign={sign} />
      </GradientContainer>
    </button>
  );
};

export default QuantityUpdaterButton;
