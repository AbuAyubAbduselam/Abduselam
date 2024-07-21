import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({ children }) => {
  // Initialize state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    const body = document.querySelector("body");
    const container = document.querySelector(".container");

    if (isDarkMode) {
      body.setAttribute("data-theme", "dark");
      container.classList.add("dark-container");
      container.classList.remove("light-container");
    } else {
      body.setAttribute("data-theme", "light");
      container.classList.add("light-container");
      container.classList.remove("dark-container");
    }

    // Save the theme to localStorage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = (e) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <div className="light-button">
          <img src={Sun} alt="Sun Icon" className="sun" />
          <img src={Moon} alt="Moon Icon" className="moon" />
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
