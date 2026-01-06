import { clsx } from "clsx";
import { decode } from "html-entities";

export default function Buttons({ answer, isSelected, select, isGameOver }) {
  const buttonStyle = clsx("option-button", {
    selected: !isGameOver && isSelected,
    correct: isGameOver && answer.isCorrect,
    wrong: isGameOver && isSelected && !answer.isCorrect,
    dimmed: isGameOver && !answer.isCorrect,
  });

  return (
    <button className={buttonStyle} onClick={select}>
      {decode(answer.text)}
    </button>
  );
}
