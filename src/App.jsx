//Create the Static version of the Start Page ---- DONE
//Create the Static version of the Quiz Page --- DONE
//Revamp it in React way, including making it composable and DRY --- DONE
//Fetch Data and work with the fetched Data to output questions --- DONE
//Create Logic for Starting new game --- DONE
//Randomly mix the correct and incorrect options --- DONE
//Create Logic for option buttons to select --- DONE
//Create Logic for Submitting

import { useEffect, useState } from "react";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";

export default function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&type=multiple"
      );
      const data = await response.json();
      setAllQuestions(data.results);
    };

    fetchQuestions();
  }, []);

  function handleCheckAnswers() {
    setIsGameOver(true);
  }

  function handlePlayAgain() {
    setIsGameOver(false);
    setStartQuiz(true);
  }

  const questionDetails = allQuestions.map((question) => {
    return <Questions key={question.question} question={question} />;
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
                <span>{`You scored 3/5 correct answers`}</span>
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
