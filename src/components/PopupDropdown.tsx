import React from "react";

type showHideProps = {
  showDropdown: boolean;
  navigate: string[];
};

const PopupDropdown = ({ showDropdown, navigate }: showHideProps) => {
  const dropdownStyle: React.CSSProperties = {
    position: "relative",
  };

  const dropdownContentStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    width: "195px",
    backgroundColor: "#f5f5f5",
    padding: "8px",
    border: "1px solid #ddd",
    borderTop: "none",
    display: showDropdown ? "block" : "none",
    transform: "translateX(-100%)",
  };

  return (
    <div style={dropdownStyle}>
      <div style={dropdownContentStyle}>
        {navigate.map((item) => {
          return (
            <div style={{ cursor: "pointer", width: "175px" }}>{item}</div>
          );
        })}
      </div>
    </div>
  );
};

export default PopupDropdown;
