import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  DataStructure,
  SystemDesign,
  Algorithm,
  Interview,
} from "./components/StudyPage.jsx";

import StudyPage from "./components/StudyPage.jsx";
import NeetCodePages from "./components/NeetcodePages.jsx";

import ContactPage from "./components/ContactPage.jsx";
import Work from "./components/Work.jsx";
import backgroundImg from "./utils/homebg.png";

function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  // Update glowPos smoothly towards mousePos
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setGlowPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  return (
    <main
      className="h-screen flex relative overflow-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat", // do not repeat
      }}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {/* Smooth yellow spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            150px circle at ${glowPos.x}px ${glowPos.y}px,
            rgba(255, 255, 100, 0.6),
            rgba(255, 233, 228, 0) 80%
          )`,
          transition: "background 0.1s ease-out",
        }}
      />

      {/* Sidebar */}
      <div className="w-[20%] flex flex-col items-center justify-between py-8 relative z-10 text-amber-50">
        <div className="flex flex-col items-center space-y-6">
          <p className="rotate-90 tracking-widest text-sm">LI</p>
          <p className="rotate-90 tracking-widest text-sm">TW</p>
          <p className="rotate-90 tracking-widest text-sm">DR</p>
        </div>
        <div className="w-[1px] h-24 bg-gray-500 my-6"></div>
        <p className="rotate-90 text-xs tracking-widest">05/2002</p>
      </div>

      {/* Middle */}
      <div className="w-[30%] flex items-center justify-center relative z-10 text-amber-50">
        <div className="flex flex-col gap-4 text-sm">
          <p>Huy L Huynh</p>
          <p>
            CS @ UW &#183; Software Developer &#183; AI &#183; Web Developer
          </p>
          <p>
            Creating functional and engaging digital experience in Seattle,
            Washington
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="self-route w-[60%] flex items-center justify-center relative z-10">
        <div className="flex flex-col gap-5 text-[4rem] font-bold">
          <Link to="/work">Work</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </main>
  );
}
function Contact() {
  return <h1 className="text-4xl">Contact Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />

      {/* Study page + full topic pages */}
      <Route path="/learn" element={<StudyPage />} />
      <Route path="/learn/DataStructure" element={<DataStructure />} />
      <Route path="/learn/SystemDesign" element={<SystemDesign />} />
      <Route path="/learn/Algorithm" element={<Algorithm />} />
      <Route path="/learn/neetcode" element={<NeetCodePages />} />
      <Route path="/learn/Interview" element={<Interview />} />

      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
