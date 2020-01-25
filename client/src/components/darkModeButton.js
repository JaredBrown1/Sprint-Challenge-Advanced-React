import React, { useState } from "react";

import useDarkMode from "../hooks/useDarkMode";

const darkModeKey = true;
const darkModeInitial = "isDarkMode";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(darkModeKey, darkModeInitial);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <div className="dark-mode-button">
        <button
          onClick={setDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default DarkMode;
