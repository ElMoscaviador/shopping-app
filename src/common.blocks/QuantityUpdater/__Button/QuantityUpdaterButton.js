import "./QuantityUpdaterButton.css";
import "./--accessibility/QuantityUpdaterButton--accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";
import GradientContainer from "../../GradientContainer/GradientContainer";
import QuantityUpdaterSign from "../__Sign/QuantityUpdaterSign";

const QuantityUpdaterButton = ({ sign, setValue }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);
  return (
    <button
      aria-label={`${sign === "+" ? "Increase" : "Decrease"} product quantity`}
      className={`Quantity-Updater__Button ${
        accessibilityMode ? "Quantity-Updater__Button--accessibility" : ""
      }`}
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
