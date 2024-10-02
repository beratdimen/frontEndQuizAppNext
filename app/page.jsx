"use client";

import Hero from "@/components/hero";
import Title from "@/components/tittle";
import "./globals.css";
import { useContext, useEffect, useState } from "react";
import Header from "@/components/header";
import { data } from "@/data";
import { ThemeContext } from "@/context";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("page", page);
    }
  }, [page]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("choose", choose);
    }
  }, [choose]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }, []);

  console.log("choose :>> ", choose);
  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div>
        <div className="questionHeader">
          <div className="headerIcon"></div>
          <Header />
        </div>
        <div className="generalBody">
          <Hero />
          <Title data={data} setChoose={setChoose} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
