import React from "react";
import f1 from "../utils/f1.png";
import { useNavigate } from "react-router-dom";
import NeetcodePage from "./NeetcodePage.jsx";

// Topic pages (can also be moved to separate files if you want)
export function DataStructure() {
  return <div className="p-6 text-4xl">Data Structure Page</div>;
}
export function SystemDesign() {
  return <div className="p-6 text-4xl">System Design Page</div>;
}
export function Algorithm() {
  return <div className="p-6 text-4xl">Algorithm Page</div>;
}
export function NeetCode() {
  return <NeetcodePage />;
}
export function Interview() {
  return <div className="p-6 text-4xl">Interview Page</div>;
}

// Main Study component
export default function Study() {
  const navigate = useNavigate();

  const circles = [
    {
      id: 1,
      name: "Data Structure",
      color: "bg-[#2a7f7f]",
      size: "w-30 h-30",
      top: "20%",
      left: "15%",
      action: () => navigate("/learn/DataStructure"),
    },
    {
      id: 2,
      name: "Algorithm",
      color: "bg-[#2a7f7f]",
      size: "w-30 h-30",
      top: "40%",
      left: "70%",
      action: () => navigate("/learn/Algorithm"),
    },
    {
      id: 3,
      name: "Interview",
      color: "bg-[#2a7f7f]",
      size: "w-30 h-30",
      top: "65%",
      left: "35%",
      action: () => navigate("/learn/Interview"),
    },
    {
      id: 4,
      name: "System Design",
      color: "bg-[#2a7f7f]",
      size: "w-30 h-30",
      top: "30%",
      left: "50%",
      action: () => navigate("/learn/SystemDesign"),
    },
    {
      id: 5,
      name: "NeetCode",
      color: "bg-[#2a7f7f]",
      size: "w-30 h-30",
      top: "75%",
      left: "80%",
      action: () => navigate("/learn/neetcode"),
    },
  ];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="text-4xl font-bold z-10 flex items-center gap-3">
        <p>Formula</p>
        <img src={f1} alt="Formula logo" className="w-20 h-20" />
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0">
        {circles.map((circle, i) => (
          <button
            key={circle.id}
            onClick={circle.action}
            className={`${circle.color} ${circle.size} rounded-full opacity-70 animate-float absolute text-amber-500`}
            style={{
              top: circle.top,
              left: circle.left,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {circle.name}
          </button>
        ))}
      </div>
    </div>
  );
}
