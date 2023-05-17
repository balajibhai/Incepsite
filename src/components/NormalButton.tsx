import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ButtonProps = {
  text: string;
  variant?: {
    color: string;
    backgroundColor: string;
    border: string;
  };
};

const NormalButton = ({ text, variant }: ButtonProps) => {
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
      backgroundColor: variant?.backgroundColor,
      color: variant?.color,
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      border: `1px solid ${variant?.border}`,
      width: "fit-content",
      height: "auto",
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
