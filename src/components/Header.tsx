import Image from "./Image";
import { ThemeButton } from "./ThemeButton";
import { useContext } from "react";
import { ColorModeContext } from "./Theme";
import { logo, logoTitle } from "../Constants";

const Header = () => {
  const { mode } = useContext(ColorModeContext);
  const theme = mode === "dark" ? "white" : "black";
  const navigate = [
    "ABOUT",
    "DELEGATIO PROGRAM",
    "GRANTS",
    "SERVER PROGRAM",
    "STAKE POOLS",
    "TOUR DE SUN",
  ];
  const classes = {
    navigate: {
      display: "flex",
      width: "83%",
      alignItems: "center",
      gap: "15px",
      fontFamily: "Diatype,Arial,sans-serif",
      color: theme,
    },
    parent: {
      display: "flex",
      alignItems: "center",
      margin: "43px",
      width: "100%",
      gap: "270px",
      paddingLeft: "5%",
    },
    image: {
      display: "flex",
      gap: "11px",
      justifyContent: "space-between",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
  };
  return (
    <div style={classes.parent}>
      <div style={classes.image}>
        <Image
          src={logo}
          alt="Example image"
          variation={{ width: "25px", height: "25px" }}
        />
        <Image
          src={logoTitle}
          alt="Example image"
          variation={{ width: "145px", height: "28px" }}
        />
      </div>
      <div style={{ display: "flex", width: "60%" }}>
        <div style={classes.navigate}>
          {navigate.map((item) => {
            return <div style={{ cursor: "pointer" }}>{item}</div>;
          })}
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
