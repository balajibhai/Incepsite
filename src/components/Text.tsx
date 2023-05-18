import React from "react";

type TextComponentProps = {
  text: string;
  type: "Title" | "Subtitle" | "Footer-title" | "Footer-subtitle" | "Number";
  color?: string;
};

const Text: React.FC<TextComponentProps> = ({ text, type, color }) => {
  const classes = {
    title: {
      color: "black",
      fontSize: "40px",
      fontWeight: "700",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    subtitle: {
      color: "black",
      fontSize: "17px",
      fontWeight: "200",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    number: {
      color: color,
      fontSize: "50px",
      fontWeight: "500",
      fontFamily: "Diatype,Arial,sans-serif",
    },
  };
  if (type === "Title") {
    return <div style={classes.title}>{text}</div>;
  } else if (type === "Subtitle") {
    return <div style={classes.subtitle}>{text}</div>;
  } else if (type === "Number") {
    return <div style={classes.number}>{text}</div>;
  }
  return null;
};

export default Text;
