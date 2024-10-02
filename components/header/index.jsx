import { ThemeContext } from "@/context";
import "./header.css";
import { useContext } from "react";

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="header">
      <img src="./img/light.svg" alt="Light Mode" />
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <img src="./img/dark.svg" alt="Dark Mode" />
    </div>
  );
}
