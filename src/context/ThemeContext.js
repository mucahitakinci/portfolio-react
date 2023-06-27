import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  });

  function setThemeState() {
    const defaultTheme = theme === "dark" ? "light" : "dark";
    setTheme(defaultTheme);
    localStorage.setItem("theme", defaultTheme);
  }

  const data = {
    theme,
    setThemeState,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useThemeState = () => useContext(ThemeContext);

export default ThemeProvider;
