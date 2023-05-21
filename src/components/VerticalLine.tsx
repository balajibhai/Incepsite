import { useContext } from "react";
import { ColorModeContext } from "./Theme";

type VerticalLineProps = {
  height: string;
};

const VerticalLine = ({ height }: VerticalLineProps) => {
  const { mode } = useContext(ColorModeContext);

  const classes = {
    line: {
      width: "2px",
      height: height,
      borderLeft: `1px solid ${mode === "dark" ? "white" : "#00000030"}`,
    },
  };
  return <div style={classes.line}></div>;
};

export default VerticalLine;
