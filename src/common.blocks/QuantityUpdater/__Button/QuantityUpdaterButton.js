import Container from "../../GradientContainer/GradientContainer";
import QuantityUpdaterSign from "../__Sign/QuantityUpdaterSign";

const QuantityUpdaterButton = ({ sign, setValue }) => {
  return (
    <button
      className="quantity-updater__button"
      type="button"
      onClick={setValue}
    >
      <Container
        additionalClasses={{
          modifiers: ["--background-gradient"],
        }}
      >
        <QuantityUpdaterSign sign={sign} />
      </Container>
    </button>
  );
};

export default QuantityUpdaterButton;
