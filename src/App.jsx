/**
 * Backlog:
 *
 * ✅ Farewell messages in status section
 * ✅ Create the Static version of the Start Page
 * ✅ Create the Static version of the Quiz Page
 * ✅ Revamp it in React way, including making it composable and DRY
 * ✅ Fetch Data and work with the fetched Data to output questions
 * ✅ Create Logic for Starting new game
 * ✅ Randomly mix the correct and incorrect options
 * ✅ Create Logic for option buttons to select
 * Create Logic for Submitting
 *
 */

import { useEffect, useState } from "react";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";

export default function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&type=multiple"
      );
      const data = await response.json();
      setAllQuestions(data.results);
    };

    fetchQuestions();
  }, [count]);

  function handleCheckAnswers() {
    setIsGameOver(true);
  }

  function handlePlayAgain() {
    setIsGameOver(false);
    setCount((prev) => prev + 1);
  }

  const questionDetails = allQuestions.map((question) => {
    return (
      <Questions
        key={question.question}
        question={question}
        isGameOver={isGameOver}
      />
    );
  });

  return (
    <main>
      {!startQuiz ? (
        <StartPage setStartQuiz={setStartQuiz} />
      ) : (
        <section className="trivia-questions">
          {questionDetails}

          <div className="final">
            {isGameOver ? (
              <>
                <span>{`You scored ${0}/${
                  allQuestions.length
                } correct answers`}</span>
                <button onClick={handlePlayAgain}>Play again</button>
              </>
            ) : (
              <button onClick={handleCheckAnswers}>Check answers</button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
