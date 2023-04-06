import "./Accessibility.css";
import { useContext } from "react";
import AccessibilityContext from "../../common.shared/contexts";

const Accessibility = () => {
  const { toggleAccessibilityMode } = useContext(AccessibilityContext);
  return (
    <input
      alt="toggle accessibility mode"
      className="Accessibility"
      type="image"
      src={require("./Accessibility.png")}
      onClick={() => toggleAccessibilityMode((previousMode) => !previousMode)}
    />
  );
};

export default Accessibility;
