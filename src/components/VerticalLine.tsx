import { useTheme } from "@mui/material";

type VerticalLineProps = {
  height: string;
};

const VerticalLine = ({ height }: VerticalLineProps) => {
  const { mode } = useTheme().palette;
  const theme = mode === "dark" ? "white" : "black";
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
