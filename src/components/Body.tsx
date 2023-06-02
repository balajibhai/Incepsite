import React, { useContext } from "react";
import NormalButton from "./NormalButton";
import Image from "./Image";
import CardsGrid from "./CardsGrid";
import TextSection from "./TextSection";
import { ColorModeContext } from "./Theme";
import { ballImg } from "../Constants";
import styled from "styled-components";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const Subtext = styled.div`
  font-size: 25px;
  font-family: "Diatype", Arial, sans-serif;
  color: ${(props) => props.theme};
`;

const FoundationContainer = styled.div`
  @media (max-width: 1275px) {
    display: flex;
    width: 90%;
    justify-content: center;
    color: ${(props) => props.theme};
  }
`;

const SubFoundationContainer = styled.div`
  width: 500px;
  height: 452px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  color: ${(props) => props.theme};

  @media (max-width: 1275px) {
    display: flex;
    width: 85%;
    height: unset;
    color: ${(props) => props.theme};
  }
`;

const Body = () => {
  const { mode } = useContext(ColorModeContext);
  const theme = mode === "dark" ? "white" : "black";
  const classes: StyleObject = {
    text: {
      fontWeight: "700",
      fontSize: "40px",
      fontFamily: "Diatype,Arial,sans-serif",
      maxHeight: "38vh",
      color: theme,
    },
    grandParent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
    },
  };
  return (
    <>
      <div style={classes.grandParent}>
        <FoundationContainer theme={theme}>
          <SubFoundationContainer theme={theme}>
            <div style={classes.text}>
              <h1>The Solana Foundation</h1>
            </div>
            <Subtext theme={theme}>
              The Solana Foundation is a non-profit foundation based in Zug,
              Switzerland, dedicated to the decentralization, adoption, and
              security of the Solana ecosystem.
            </Subtext>
            <div>
              <NormalButton
                variant={{
                  color: "black",
                  backgroundColor: "white",
                  border: "black",
                }}
                text="Learn more about solana"
              />
            </div>
          </SubFoundationContainer>
        </FoundationContainer>
        <div>
          <Image
            src={ballImg}
            alt="Example image"
            variation={{ width: "45vw", height: "auto" }}
          />
        </div>
      </div>
      <CardsGrid />
      <TextSection />
    </>
  );
};

export default Body;
