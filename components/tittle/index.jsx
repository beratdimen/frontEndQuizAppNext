import React from "react";
import "./tittle.css";

export default function Title({ data, setChoose, setPage, darkMode }) {
  return (
    <div className="card">
      {data.quizzes.map((x, i) => (
        <div className={`cardbox ${darkMode ? "dark" : ""}`} key={i}>
          <button
            className="cardBtn"
            onClick={() => {
              setChoose(x.title);
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
