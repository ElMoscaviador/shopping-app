import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Background from "../CosmeticElements/Background";
import Header from "../CosmeticElements/Header";

const App = () => {
  const [shopCategoryOpened, setShopCategoryOpened] = useState(false);

  return (
    <div className="App">
      <Header />
      <Background />
      <NavBar
        shopCategoryState={[shopCategoryOpened, setShopCategoryOpened]}
      />
      <Outlet
        context={{
          shopCategoryState: [shopCategoryOpened, setShopCategoryOpened],
        }}
      />
    </div>
  );
};

export default App;
