import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Background from "../Background/Background";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const App = () => {
  const [cart, setCart] = useState([]);
  const [categoryIsVisited, setCategoryIsVisited] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div className="App">
      <Header title={currentCategory} />
      <Background />
      <NavBar
        cartLength={cart.length}
        categoryVisitedState={[categoryIsVisited, setCategoryIsVisited]}
        setCurrentCategory={setCurrentCategory}
      />
      <Outlet
        context={{
          cartState: [cart, setCart],
          setCurrentCategory,
          categoryVisitedState: [categoryIsVisited, setCategoryIsVisited],
        }}
      />
    </div>
  );
};

export default App;
