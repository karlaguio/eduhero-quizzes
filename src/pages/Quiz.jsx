// File: src/pages/Quiz.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "../data/questions.json";

export default function Quiz() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const quizQuestions = questions[topic];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  if (!quizQuestions) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          No quiz found for topic: "{topic}"
        </h2>
        <p className="mt-4">
          Please return to the homepage and select a valid quiz topic.
        </p>
      </div>
    );
  }

  const currentQuestion = quizQuestions[current];

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      navigate("/result", { state: { score: score + (selectedAnswer === currentQuestion.correct ? 1 : 0), total: quizQuestions.length } });
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Question {current + 1} of {quizQuestions.length}
      </h2>
      <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>
      <div className="grid gap-3">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice)}
            className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-left text-base shadow-sm"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
