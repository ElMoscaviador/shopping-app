import { useEffect } from "react";
import swipeImages from "./swipeImages";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const Home = () => {
  useEffect(() => {
    const showcasedContainer = document.querySelector(
      ".showcased-item__container"
    );
    if (showcasedContainer) swipeImages(showcasedContainer);
  });

  const showcasedItems = [
    { name: "name 1", img: img1 },
    { name: "name 2", img: img2 },
    { name: "name 3", img: img3 },
  ];
  return (
    <main className="home" aria-label="home">
      <div className="showcased-item__container">
        {showcasedItems.map((item) => {
          return (
            <div
              key={item.name}
              className="showcased-item"
              style={{ backgroundImage: `url(${item.img})` }}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
