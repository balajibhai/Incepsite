import React from "react";
import Text from "./Text";
import VerticalLine from "./VerticalLine";

type StyleObject = {
  [key: string]: React.CSSProperties;
};

const TextSection = () => {
  const classes: StyleObject = {
    parent: {
      width: "631px",
      height: "139px",
      flexDirection: "column",
      justifyContent: "space-between",
      display: "flex",
    },
    grandParent: {
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
    <div style={classes.grandParent}>
      <div style={classes.parent}>
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
          <VerticalLine />
          <div style={{ width: "484px" }}>
            <Text
              text="On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program."
              type="Subtitle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
