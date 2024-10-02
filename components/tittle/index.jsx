import React, { useContext } from "react";
import "./tittle.css";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context";

export default function Title({ data, setPage }) {
  const { darkMode } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <div className="card">
      {data.quizzes.map((x, i) => (
        <div className={`cardbox ${darkMode ? "dark" : ""}`} key={i}>
          <button
            className="cardBtn"
            onClick={() => {
              router.push(`/${x.title.toLowerCase()}`);
              setPage(1);
            }}
          >
            <img src={x.icon} alt="" />
            <span>{x.title}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
