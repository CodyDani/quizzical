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
 * Create Logic for Submitting & scoring user
 *
 */

import { useEffect, useState } from "react";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";
import { nanoid } from "nanoid";

export default function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&type=multiple"
      );
      const data = await response.json();

      const formatted = data.results.map((q) => {
        const answers = [
          ...q.incorrect_answers.map((a) => {
            return {
              id: nanoid(),
              text: a,
              isCorrect: false,
            };
          }),
          {
            id: nanoid(),
            text: q.correct_answer,
            isCorrect: true,
          },
        ].sort(() => Math.random() - 0.5);

        return {
          id: nanoid(),
          question: q.question,
          answers,
          selectedAnswerId: null,
        };
      });

      setAllQuestions(formatted);
    };

    fetchQuestions();
  }, [count]);

  function selectAnswer(questionId, answerId) {
    if (isGameOver) return;
    setAllQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, selectedAnswerId: answerId } : q
      )
    );
  }

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
        key={question.id}
        question={question}
        selectAnswer={selectAnswer}
        isGameOver={isGameOver}
      />
    );
  });

  const score = allQuestions.reduce((total, q) => {
    const selected = q.answers.find((a) => a.id === q.selectedAnswerId);
    return selected?.isCorrect ? total + 1 : total;
  }, 0);

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
                <span>{`You scored ${score}/${allQuestions.length} correct answers`}</span>
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
