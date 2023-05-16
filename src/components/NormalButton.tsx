import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ButtonProps = {
  text: string;
};

const NormalButton = ({ text }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const classes = {
    curvedButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px 20px",
      borderRadius: "6px",
      backgroundColor: "#007bff",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
    },
    rightArrow: {
      marginLeft: "8px",
    },
    onHover: {
      backgroundColor: "orange",
    },
  };
  return (
    <button
      style={
        isHovered
          ? { ...classes.curvedButton, ...classes.onHover }
          : classes.curvedButton
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <ArrowForwardIcon />
    </button>
  );
};

export default NormalButton;
