import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themePage, setTheme] = useState("light");
  const [fontPage, setFont] = useState("sans-serif");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", themePage);
  }, [themePage]);

  const toggleTheme = () => {
    setTheme(themePage === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ themePage, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
