import React, { useContext } from "react";
import NormalButton from "./NormalButton";
import Image from "./Image";
import CardsGrid from "./CardsGrid";
import TextSection from "./TextSection";
import { ColorModeContext } from "./Theme";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const Body = () => {
  const { mode } = useContext(ColorModeContext);
  const theme = mode === "dark" ? "white" : "black";
  const classes: StyleObject = {
    text: {
      fontWeight: "700",
      fontSize: "40px",
      fontFamily: "Diatype,Arial,sans-serif",
      height: "230px",
      color: theme,
    },
    subtext: {
      fontSize: "25px",
      fontFamily: "Diatype,Arial,sans-serif",
      color: theme,
    },
    parent: {
      width: "500px",
      height: "452px",
      flexDirection: "column",
      justifyContent: "space-between",
      display: "flex",
    },
    grandParent: {
      display: "flex",
      margin: "150px",
      height: "555px",
    },
  };
  return (
    <>
      <div style={classes.grandParent}>
        <div style={classes.parent}>
          <div style={classes.text}>
            <h1>The Solana Foundation</h1>
          </div>
          <div style={classes.subtext}>
            The Solana Foundation is a non-profit foundation based in Zug,
            Switzerland, dedicated to the decentralization, adoption, and
            security of the Solana ecosystem.
          </div>
          <NormalButton
            variant={{
              color: "black",
              backgroundColor: "white",
              border: "black",
            }}
            text="Learn more about solana"
          />
        </div>
        <div style={{ marginTop: "-130px" }}>
          <Image
            src="https://solana.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-2.a3e5e47e.png&w=1080&q=50"
            alt="Example image"
            variation={{ width: "776px", height: "820px" }}
          />
        </div>
      </div>
      <CardsGrid />
      <TextSection />
    </>
  );
};

export default Body;
