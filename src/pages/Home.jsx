// File: src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const topics = ["Math", "Science", "English"];

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to EduHero Quizzes</h1>
      <p className="mb-4 text-lg text-gray-700">Select a topic to begin your learning adventure!</p>
      <div className="flex justify-center flex-wrap gap-4">
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/quiz/${topic.toLowerCase()}`}
            className="px-6 py-3 rounded-2xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}

