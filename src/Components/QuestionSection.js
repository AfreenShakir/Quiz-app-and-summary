import React, { useState } from "react";
import "../styles.css";

export default function QuestionSection() {
  const questions = [
    {
      questionText: "What is the capital of Madhya Pradesh",
      answerOptions: "bhopal"
    },
    {
      questionText: "What is the capital of Chattisgarh",
      answerOptions: "raipur"
    },
    {
      questionText: "What is the capital of Maharashtra",
      answerOptions: "pune"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSummary, setSummary] = useState(false);
  const [score, setScore] = useState(0);

  //  Check for which question is selected . If it's last set to summary page
  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      const textarea = document.getElementById("textarea");
      textarea.value = "";
    } else {
      setSummary(true);
    }
  };

  //Check for text area event trigger. What is typed whether it matches or not
  const changeEvent = () => {
    if (
      event.target.value.toLowerCase() ===
      questions[currentQuestion].answerOptions
    ) {
      setScore(score + 1);
    }
  };

  return (
    <div className="app">
      {showSummary ? (
        <div className="score-section">
          You scored {score} out of {questions.length}{" "}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Wizard</span>
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            <textarea
              className="textarea"
              id="textarea"
              minRows={3}
              maxRows={10}
              onChange={(e) => changeEvent()}
            />
            <button onClick={() => handleAnswerOptionClick()}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}
