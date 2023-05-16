import React from "react";

type TextComponentProps = {
  text: string;
  style?: {
    color: string;
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
};

const Text: React.FC<TextComponentProps> = ({ text, style }) => {
  return <div style={style}>{text}</div>;
};

export default Text;
