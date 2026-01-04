// import React from "react";
// import Buttons from "./Buttons";

// export default function OptionButton({ incorrect, correct, isGameOver }) {
//   const [allOptions, setAllOptions] = React.useState([...incorrect]);
//   const [selectedOption, setSelectedOption] = React.useState(null);

//   React.useEffect(() => {
//     function insertAtRandomIndex(newItem) {
//       const random = Math.floor(Math.random() * allOptions.length) + 1;

//       const updatedArray = [...incorrect];
//       updatedArray.splice(random, 0, newItem);

//       setAllOptions(updatedArray);
//     }

//     insertAtRandomIndex(correct);
//   }, []);

//   function handleSelectedAnswer(optionValue) {
//     if (isGameOver) return;
//     setSelectedOption((prevSelected) =>
//       optionValue === prevSelected ? null : optionValue
//     );
//   }

//   return (
//     <div className="btns">
//       {allOptions.map((option, index) => {
//         return (
//           <Buttons
//             key={index}
//             value={option}
//             selectedOption={selectedOption}
//             handleSelectedAnswer={handleSelectedAnswer}
//             correct={correct}
//             isGameOver={isGameOver}
//           />
//         );
//       })}
//     </div>
//   );
// }

import Buttons from "./Buttons";

export default function OptionButton({ question, selectAnswer, isGameOver }) {
  return (
    <div className="btns">
      {question.answers.map((answer) => (
        <Buttons
          key={answer.id}
          answer={answer}
          isSelected={question.selectedAnswerId === answer.id}
          select={() => selectAnswer(question.id, answer.id)}
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
}
