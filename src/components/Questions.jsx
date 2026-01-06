import OptionButton from "./OptionButton";
import { decode } from "html-entities";

export default function Questions({ question, selectAnswer, isGameOver }) {
  const eachQuestion = decode(question.question);

  return (
    <div className="question">
      <h1>{eachQuestion}</h1>
      <OptionButton
        question={question}
        selectAnswer={selectAnswer}
        isGameOver={isGameOver}
      />
    </div>
  );
}
