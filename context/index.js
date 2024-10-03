"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [darkMode, setDarkMode] = useState(
  //   () => localStorage.getItem("darkMode") === "true"
  // );

  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  // }, [darkMode]);

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const cookieDarkMode = Cookies.get("darkMode") === "true";
    setDarkMode(cookieDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      Cookies.set("darkMode", darkMode, { expires: 7 });
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {darkMode !== null ? children : null}
    </ThemeContext.Provider>
  );
};
