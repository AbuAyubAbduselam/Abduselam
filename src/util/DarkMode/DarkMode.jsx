import { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    const body = document.querySelector("body");
    console.log(body);

    if (isDarkMode) {
      body.setAttribute("data-theme", "dark");
    } else {
      body.setAttribute("data-theme", "light");
    }

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
