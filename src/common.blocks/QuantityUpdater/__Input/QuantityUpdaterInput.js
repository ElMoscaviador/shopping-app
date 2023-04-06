import "./QuantityUpdaterInput.css";
import "./--accessibility/QuantityUpdaterInput--accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../../common.shared/contexts";

const QuantityUpdaterInput = ({ quantity, setValue }) => {
  const { accessibilityMode } = useContext(AccessibilityContext);

  return (
    <input
      aria-labelledby="quantity"
      className={`Quantity-Updater__Input ${
        accessibilityMode ? "Quantity-Updater__Input--accessibility" : ""
      }`}
      min={1}
      name="quantity"
      onChange={setValue}
      data-testid="quantity-input"
      type="numeric"
      pattern={"[0-9]+"}
      value={quantity}
    />
  );
};

export default QuantityUpdaterInput;
