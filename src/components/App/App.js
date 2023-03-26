import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Background from "./Background";
import Header from "./Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [shopCategoryOpened, setShopCategoryOpened] = useState(false);

  return (
    <div className="App">
      <Header title={currentCategory} />
      <Background />
      <NavBar
        cartLength={cart.length}
        shopCategoryState={[shopCategoryOpened, setShopCategoryOpened]}
        setCurrentCategory={setCurrentCategory}
      />
      <Outlet
        context={{
          cartState: [cart, setCart],
          setCurrentCategory,
          shopCategoryState: [shopCategoryOpened, setShopCategoryOpened],
        }}
      />
    </div>
  );
};

export default App;
