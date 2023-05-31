import React from "react";
import Text from "./Text";
import VerticalLine from "./VerticalLine";
import styled from "styled-components";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const Censorship = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1217px) {
    all: inherit;
    height: 10%;
  }
`;

const Level2 = styled.div`
  display: flex;
  width: 75%;

  @media (max-width: 1217px) {
    all: inherit;
    flex-wrap: wrap;
  }
`;

const CensorshipPoints = styled.div`
  width: 40%;
  height: 35%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  padding: 4%;
  margin-top: 62px;

  @media (max-width: 1217px) {
    all: inherit;
    height: 23%;
  }
`;

const CensorshipSub1 = styled.div`
  width: 441px;
  overflow-y: hidden;

  @media (max-width: 1217px) {
    width: unset;
  }
`;

const Numbersection = styled.div`
  display: flex;
  width: 106%;
  justify-content: space-between;
  margin-top: 62px;

  @media (max-width: 1211px) {
    width: 73%;
  }
`;

const TextSection = () => {
  const classes: StyleObject = {
    censorshipPoints: {
      width: "40%",
      height: "35%",
      flexDirection: "column",
      justifyContent: "space-between",
      display: "flex",
      padding: "4%",
    },
    censorship: {
      display: "flex",
      justifyContent: "space-around",
    },
    numbersection: {
      display: "flex",
      width: "106%",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "88%" }}>
      <Censorship>
        <Level2>
          <CensorshipPoints>
            <CensorshipSub1>
              <Text text="Censorship resistance, now." type="Title" />
            </CensorshipSub1>
            <Text
              text="The Solana Foundation is working to make the Solana protocol the most censorship resistant network in the world."
              type="Subtitle"
            />
          </CensorshipPoints>
          <div style={{ padding: "3%", width: "100%" }}>
            <Numbersection>
              <Text text="1" type="Number" color="#bf2b06" />
              <VerticalLine height="100px" />
              <div style={{ width: "484px" }}>
                <Text
                  text="On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program."
                  type="Subtitle"
                />
              </div>
            </Numbersection>
            <Numbersection>
              <Text text="2" type="Number" color="#9e277b" />
              <VerticalLine height="70px" />
              <div style={{ width: "484px" }}>
                <Text
                  text="Validator operators and RPC node operators may choose to participate in our Server Program to locate their operations in data centers distributed around the globe."
                  type="Subtitle"
                />
              </div>
            </Numbersection>
            <Numbersection>
              <Text text="3" type="Number" color="#44167e" />
              <VerticalLine height="80px" />
              <div style={{ width: "484px" }}>
                <Text
                  text="Community members and token holders can choose to participate in Stake Pools to directly increase the censorship resistance of the network while potentially earning tokens at the same time."
                  type="Subtitle"
                />
              </div>
            </Numbersection>
          </div>
        </Level2>
      </Censorship>
    </div>
  );
};

export default TextSection;
