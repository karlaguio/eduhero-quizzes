// EduHero Quizzes: React Project Scaffold

// File: src/App.jsx 
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

// File: src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const topics = ["Math", "Science", "English"];

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to EduHero Quizzes</h1>
      <p className="mb-4">Select a topic to get started:</p>
      <div className="flex justify-center gap-4">
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/quiz/${topic.toLowerCase()}`}
            className="px-4 py-2 rounded-xl shadow bg-blue-500 text-white hover:bg-blue-600"
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}

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

  function handleAnswer(answer) {
    if (answer === quizQuestions[current].correct) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      navigate("/result", { state: { score, total: quizQuestions.length } });
    }
  }

  const q = quizQuestions[current];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{q.question}</h2>
      <div className="grid gap-3">
        {q.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(choice)}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

// File: src/pages/Result.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const { score, total } = state || {};

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-lg mb-4">
        You scored {score} out of {total} ⭐
      </p>
      <Link
        to="/"
        className="px-4 py-2 rounded-xl shadow bg-green-500 text-white hover:bg-green-600"
      >
        Try Another Quiz
      </Link>
    </div>
  );
}

// File: src/data/questions.json
{
  "math": [
    {
      "question": "What is 2 + 2?",
      "choices": ["3", "4", "5"],
      "correct": "4"
    },
    {
      "question": "What is 10 divided by 2?",
      "choices": ["4", "5", "6"],
      "correct": "5"
    }
  ],
  "science": [
    {
      "question": "What planet is known as the Red Planet?",
      "choices": ["Earth", "Mars", "Jupiter"],
      "correct": "Mars"
    }
  ],
  "english": [
    {
      "question": "What is the plural of 'mouse'?",
      "choices": ["mouses", "mice", "mouse"],
      "correct": "mice"
    }
  ]
}

// Tailwind CSS styles already assumed available via setup

