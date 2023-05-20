import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import { useTheme } from "@mui/material";

const Main = () => {
  const { mode } = useTheme().palette;
  return (
    <div className={mode === "dark" ? "app-container-dark" : "app-container"}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
