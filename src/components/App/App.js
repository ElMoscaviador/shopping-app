import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Background from "./Background";
import Header from "./Header";

const App = () => {
  const [shopCategoryOpened, setShopCategoryOpened] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div className="App">
      <Header title={currentCategory} />
      <Background />
      <NavBar shopCategoryState={[shopCategoryOpened, setShopCategoryOpened]} />
      <Outlet
        context={{
          shopCategoryState: [shopCategoryOpened, setShopCategoryOpened],
          setCurrentCategory,
        }}
      />
    </div>
  );
};

export default App;
