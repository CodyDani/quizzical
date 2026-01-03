import React from "react";
import { clsx } from "clsx";

export default function Buttons({
  value,
  selectedOption,
  handleSelectedAnswer,
  correct,
  isGameOver,
}) {
  const isSelected = value === selectedOption;
  const isCorrectAnswerSelected = isSelected === correct;

  const buttonStyle = clsx("option-button", {
    selected: !isGameOver && isSelected,
    correct: isGameOver && value === correct,
    wrong: isGameOver && isSelected && value !== correct,
    dimmed: isGameOver && value !== correct,
  });

  return (
    <button className={buttonStyle} onClick={() => handleSelectedAnswer(value)}>
      {value}
    </button>
  );
}
