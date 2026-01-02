import React from "react";

export default function Buttons({
  value,
  selectedOption,
  handleSelectedAnswer,
}) {
  const isSelected = value === selectedOption;

  const buttonStyle = {
    border: "none",
    borderRadius: "7px",
    padding: "5px",
    border: "0.79px solid #4d5b9e",
    fontSize: "10px",
    fontFamily: '"inter", sans-serif',
    cursor: "pointer",
    background: !isSelected ? " #f5f7fb" : "#d6dbf5",
    color: !isSelected ? "#4d5b9e" : "#293264",
  };

  return (
    <button style={buttonStyle} onClick={() => handleSelectedAnswer(value)}>
      {value}
    </button>
  );
}
