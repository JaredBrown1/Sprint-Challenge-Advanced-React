import React from "react";

import useDarkMode from "../hooks/useDarkMode";

const darkModeKey = true;
const darkModeInitial = "isDarkMode";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(darkModeKey, darkModeInitial);

  return (
    <nav>
      <button
        onClick={setDarkMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Dark Mode
      </button>
    </nav>
  );
};

export default DarkMode;
