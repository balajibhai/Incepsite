import React from "react";
import Image from "./Image";

const Header = () => {
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
      justifyContent: "space-between",
      width: "773px",
      alignItems: "center",
      marginRight: "272px",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    parent: {
      display: "flex",
      justifyContent: "space-between",
      margin: "28px",
    },
    image: {
      display: "flex",
      width: "179px",
      justifyContent: "space-between",
      marginLeft: "45px",
      cursor: "pointer",
    },
  };
  return (
    <div style={classes.parent}>
      <div style={classes.image}>
        <Image
          src="https://solana.org/_next/static/media/solana_foundation_colored_logo_only.124d9acc.svg"
          alt="Example image"
          variation={{ width: "25px", height: "25px" }}
        />
        <Image
          src="https://solana.org/_next/static/media/solana_foundation_dark_letters_only.d4426ab4.svg"
          alt="Example image"
          variation={{ width: "145px", height: "28px" }}
        />
      </div>
      <div style={classes.navigate}>
        {navigate.map((item) => {
          return <div style={{ cursor: "pointer" }}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Header;
