import "./BackgroundLayer.css";
import './--main/BackgroundLayer--main.css';
import './--style/BackgroundLayer--style.css';
import { addBEMClasses } from "../../../shared/utils/handlers";

const BackgroundLayer = ({ additionalClasses }) => (
  <div
    className={`Background__Layer ${addBEMClasses(
      additionalClasses,
      "Background__Layer"
    )}`}
  />
);

export default BackgroundLayer;
