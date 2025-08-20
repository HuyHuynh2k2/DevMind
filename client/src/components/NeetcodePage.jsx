import React from "react";
import { useState, useEffect } from "react";
function ProblemCard({ problem }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="border border-gray-400 rounded-2xl p-6 shadow-sm bg-white mb-10">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold pl-8">{problem.name}</h2>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            problem.difficulty === "Easy"
              ? "bg-green-100 text-green-700"
              : problem.difficulty === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {problem.difficulty}
        </span>
      </div>

      <pre className="whitespace-pre-wrap text-sm text-gray-700 mb-4">
        {problem.question}
      </pre>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="text-blue-600 text-sm font-medium hover:underline "
      >
        {showSolution ? "hide solution" : "show solution"}
      </button>

      {showSolution && (
        <>
          <pre className="mt-3 text-sm font-mono whitespace-pre-wrap leading-relaxed bg-gray-100 rounded-lg p-3">
            {problem.solution}
          </pre>
          <p className="pt-3">Approach: {problem.approach}</p>
        </>
      )}
    </div>
  );
}
export default function NeetcodePage() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("/api/neetcode")
      .then((res) => res.json())
      .then((data) => setProblems(data))
      .catch((err) => console.error("Error fetching problems:", err));
  }, []);

  return (
    <div className="min-h-screen text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">Neetcode Problem</h1>
      <div>
        {problems.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
      </div>
    </div>
  );
}
