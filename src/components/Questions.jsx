import React from "react";
import OptionButton from "./OptionButton";
import { decode } from "html-entities";

export default function Questions({ question }) {
  const eachQuestion = decode(question.question);

  function decodeIncorrect(incorrectAnswers) {
    const newIncorrectAnswers = [];
    for (let i = 0; i < incorrectAnswers.length; i++) {
      newIncorrectAnswers.push(decode(incorrectAnswers[i]));
    }
    return newIncorrectAnswers;
  }

  const incorrectAnswers = decodeIncorrect(question.incorrect_answers);
  const correctAnswer = decode(question.correct_answer);

  return (
    <div className="question">
      <h1>{eachQuestion}</h1>
      <OptionButton incorrect={incorrectAnswers} correct={correctAnswer} />
    </div>
  );
}
