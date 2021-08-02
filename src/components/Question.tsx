import { useState } from "react";
import "../styles/question.scss";

function Questions() {
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const RightAnswer = () => {
    if (Question[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    console.log(score);
  };

  const Question = [
    {
      prompt: "quanto é 1+3?",
      optionA: "24",
      optionB: "21",
      optionC: "4",
      optionD: "2",
      answer: "C",
    },
  ];

  return (
    <div>
      <div className="question-block">
        <h3>{Question[currQuestion].prompt}</h3>
      </div>

      <button type="button" onClick={() => setOptionChosen("A")}>
        {Question[currQuestion].optionA}
      </button>

      <button type="button" onClick={() => setOptionChosen("B")}>
        {Question[currQuestion].optionB}
      </button>

      <button type="button" onClick={() => setOptionChosen("C")}>
        {Question[currQuestion].optionC}
      </button>

      <button type="button" onClick={() => setOptionChosen("D")}>
        {Question[currQuestion].optionD}
      </button>
      <button type="button" onClick={RightAnswer}>
        Confirm
      </button>
    </div>
  );
}

export default Questions;
