"use client";

import Hero from "@/components/hero";
import Title from "@/components/tittle";
import "./globals.css";
import Questions from "@/components/question";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import { data } from "@/data";

export default function Home() {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("page")
      ? parseInt(localStorage.getItem("page"), 10)
      : 0;
  });

  const [choose, setChoose] = useState(() => {
    return localStorage.getItem("choose")
      ? localStorage.getItem("choose")
      : null;
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem("choose", choose);
  }, [choose]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      {page === 0 && (
        <div>
          <div className="questionHeader">
            <div className="headerIcon"></div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div className="generalBody">
            <Hero darkMode={darkMode} />
            <Title
              data={data}
              setChoose={setChoose}
              setPage={setPage}
              darkMode={darkMode}
            />
          </div>
        </div>
      )}
      {page === 1 && (
        <Questions
          data={data}
          choose={choose}
          setPage={setPage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
}
