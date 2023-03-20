import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Background from "../CosmeticElements/Background";
import Header from "../CosmeticElements/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Background />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
