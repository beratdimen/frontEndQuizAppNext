import "./header.css";

export default function Header({ setDarkMode, darkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

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
