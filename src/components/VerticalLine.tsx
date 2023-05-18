type VerticalLineProps = {
  height?: string;
};

const VerticalLine = ({ height }: VerticalLineProps) => {
  const classes = {
    line: {
      width: "2px",
      height: "100px",
      borderLeft: "1px solid #00000030",
    },
  };
  return <div style={classes.line}></div>;
};

export default VerticalLine;
