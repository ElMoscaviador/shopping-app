import "./Background.css";
import BackgroundLayer from "./__Layer/BackgroundLayer";

const Background = () => {
  return (
    <div className="Background">
      {Array(6)
        .fill("")
        .map((__, index) => (
          <BackgroundLayer
            additionalClasses={{
              modifiers: [
                `--style--${index === 2 ? "gradient" : "transparent"}`,
                `${index === 5 ? "--main" : ""}`,
              ],
            }}
            key={index}
          />
        ))}
    </div>
  );
};

export default Background;
