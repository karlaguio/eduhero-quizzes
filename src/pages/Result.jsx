// File: src/pages/Result.jsx
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || {};

  // Handle missing state (e.g., user refreshes the result page directly)
  if (score === undefined || total === undefined) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Oops!</h2>
        <p className="mb-4">It looks like you navigated here without finishing a quiz.</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Go to Homepage
        </button>
      </div>
    );
  }

  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-2">You scored:</p>
      <div className="text-5xl font-extrabold text-green-600 mb-4">{score} / {total}</div>
      <p className="text-lg mb-6">That's {percentage}% correct!</p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500
