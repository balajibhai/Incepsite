import Image from "./Image";
import { ThemeButton } from "./ThemeButton";
import { useContext, useState } from "react";
import { ColorModeContext } from "./Theme";
import { logo, logoTitle } from "../Constants";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigate = styled.div`
  display: flex;
  width: 83%;
  align-items: center;
  gap: 15px;
  font-family: Diatype, Arial, sans-serif;
  color: ${(props) => props.theme};

  @media (max-width: 1321px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 1321px) {
    display: block;
    cursor: pointer;
  }
`;

const Parent = styled.div`
  display: flex;
  align-items: center;
  margin: 43px;
  width: 100%;
  gap: 270px;
  padding-left: 5%;

  @media (max-width: 1321px) {
    display: flex;
    align-items: center;
    margin: 43px;
    width: unset;
    gap: 0px;
    padding-left: 5%;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  display: flex;
  width: 60%;

  @media (max-width: 1321px) {
    width: unset;
  }
`;

const Header = () => {
  const { mode } = useContext(ColorModeContext);
  const theme = mode === "dark" ? "white" : "black";
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
    image: {
      display: "flex",
      gap: "11px",
      justifyContent: "space-between",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
  };
  return (
    <Parent>
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
      <Content>
        <Navigate theme={theme}>
          {navigate.map((item) => {
            return <div style={{ cursor: "pointer" }}>{item}</div>;
          })}
          <ThemeButton />
        </Navigate>
        <Hamburger onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} />
        </Hamburger>
      </Content>
    </Parent>
  );
};

export default Header;
