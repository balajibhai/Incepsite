import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import { useContext } from "react";
import { ColorModeContext } from "./Theme";

const Main = () => {
  const { mode } = useContext(ColorModeContext);
  return (
    <div className={mode === "dark" ? "app-container-dark" : "app-container"}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
