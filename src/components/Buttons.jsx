// import React from "react";
// import { clsx } from "clsx";

// export default function Buttons({
//   value,
//   selectedOption,
//   handleSelectedAnswer,
//   correct,
//   isGameOver,
// }) {
//   const isSelected = value === selectedOption;
//   const isCorrectAnswerSelected = isSelected === correct;

//   const buttonStyle = clsx("option-button", {
//     selected: !isGameOver && isSelected,
//     correct: isGameOver && value === correct,
//     wrong: isGameOver && isSelected && value !== correct,
//     dimmed: isGameOver && value !== correct,
//   });

//   return (
//     <button className={buttonStyle} onClick={() => handleSelectedAnswer(value)}>
//       {value}
//     </button>
//   );
// }

import { clsx } from "clsx";
import { decode } from "html-entities";

export default function Buttons({ answer, isSelected, select, isGameOver }) {
  const classes = clsx("option-button", {
    selected: !isGameOver && isSelected,
    correct: isGameOver && answer.isCorrect,
    wrong: isGameOver && isSelected && !answer.isCorrect,
    dimmed: isGameOver && !answer.isCorrect,
  });

  return (
    <button className={classes} onClick={select}>
      {decode(answer.text)}
    </button>
  );
}
