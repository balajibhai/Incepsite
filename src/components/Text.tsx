import React, { useContext } from "react";
import { ColorModeContext } from "./Theme";

type TextComponentProps = {
  text: string;
  type:
    | "Title"
    | "Subtitle"
    | "Footer-title"
    | "Footer-subtitle"
    | "Number"
    | "bottom-text";
  color?: string;
};

const Text: React.FC<TextComponentProps> = ({ text, type, color }) => {
  const { mode } = useContext(ColorModeContext);
  const theme = mode === "dark" ? "white" : "black";
  const classes = {
    title: {
      color: theme,
      fontSize: "40px",
      fontWeight: "700",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    subtitle: {
      color: theme,
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
    footerTitle: {
      color: "#929295",
      fontSize: "2rem",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    footerSubtitle: {
      color: "#fff",
      fontSize: "1rem",
      fontFamily: "Diatype,Arial,sans-serif",
    },
    bottomText: {
      color: "#929295",
      fontSize: "0.85rem",
      fontFamily: "Diatype,Arial,sans-serif",
    },
  };
  if (type === "Title") {
    return <div style={classes.title}>{text}</div>;
  } else if (type === "Subtitle") {
    return <div style={classes.subtitle}>{text}</div>;
  } else if (type === "Number") {
    return <div style={classes.number}>{text}</div>;
  } else if (type === "Footer-title") {
    return <div style={classes.footerTitle}>{text}</div>;
  } else if (type === "Footer-subtitle") {
    return <div style={classes.footerSubtitle}>{text}</div>;
  }
  return <div style={classes.bottomText}>{text}</div>;
};

export default Text;
