import React from "react";

export default function StartPage({ setStartQuiz }) {
  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <p>Test yourself in Computer knowledge</p>
      <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
    </div>
  );
}
