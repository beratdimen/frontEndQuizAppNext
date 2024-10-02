"use client";

import "../globals.css";

import Questions from "@/components/question";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function QuizPage({ params }) {
  const { quiz } = params;

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <Questions choose={quiz} />
    </div>
  );
}
