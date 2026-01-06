import Buttons from "./Buttons";

export default function OptionButton({ question, selectAnswer, isGameOver }) {
  return (
    <div className="btns">
      {question.answers.map((answer) => {
        return (
          <Buttons
            key={answer.id}
            answer={answer}
            isSelected={question.selectedAnswerId === answer.id}
            select={() => selectAnswer(question.id, answer.id)}
            isGameOver={isGameOver}
          />
        );
      })}
    </div>
  );
}
