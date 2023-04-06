import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AccessibilityContext from "../../common.shared/contexts";
import Background from "../Background/Background";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const App = () => {
  const [accessibilityMode, toggleAccessibilityMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [categoryIsVisited, setCategoryIsVisited] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <AccessibilityContext.Provider
      value={{ accessibilityMode, toggleAccessibilityMode }}
    >
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
        <Footer />
      </div>
    </AccessibilityContext.Provider>
  );
};

export default App;
