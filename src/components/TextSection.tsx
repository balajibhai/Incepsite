import React from "react";
import Text from "./Text";
import VerticalLine from "./VerticalLine";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const TextSection = () => {
  const classes: StyleObject = {
    censorshipPoints: {
      width: "631px",
      height: "139px",
      flexDirection: "column",
      justifyContent: "space-between",
      display: "flex",
    },
    censorship: {
      display: "flex",
      margin: "132px",
    },
    numbersection: {
      display: "flex",
      width: "570px",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={classes.censorship}>
      <div style={classes.censorshipPoints}>
        <div style={{ width: "441px", overflowY: "hidden" }}>
          <Text text="Censorship resistance, now." type="Title" />
        </div>
        <Text
          text="The Solana Foundation is working to make the Solana protocol the most censorship resistant network in the world."
          type="Subtitle"
        />
      </div>
      <div>
        <div style={classes.numbersection}>
          <Text text="1" type="Number" color="#bf2b06" />
          <VerticalLine height="100px" />
          <div style={{ width: "484px" }}>
            <Text
              text="On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program."
              type="Subtitle"
            />
          </div>
        </div>
        <div style={{ ...classes.numbersection, marginTop: "62px" }}>
          <Text text="2" type="Number" color="#9e277b" />
          <VerticalLine height="70px" />
          <div style={{ width: "484px" }}>
            <Text
              text="Validator operators and RPC node operators may choose to participate in our Server Program to locate their operations in data centers distributed around the globe."
              type="Subtitle"
            />
          </div>
        </div>
        <div style={{ ...classes.numbersection, marginTop: "62px" }}>
          <Text text="3" type="Number" color="#44167e" />
          <VerticalLine height="80px" />
          <div style={{ width: "484px" }}>
            <Text
              text="Community members and token holders can choose to participate in Stake Pools to directly increase the censorship resistance of the network while potentially earning tokens at the same time."
              type="Subtitle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
