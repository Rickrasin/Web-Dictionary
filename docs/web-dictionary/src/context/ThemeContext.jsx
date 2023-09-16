import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themePage, setTheme] = useState("light");
  const [fontPage, setFont] = useState("sans-serif");
  const [fontView, setFontView] = useState("Sans Serif");

  useEffect(() => {
    const doc = document.querySelector("body");
    doc.setAttribute("data-theme", themePage);
    doc.setAttribute("data-font", fontPage);
  }, [themePage, fontPage]);

  const toggleTheme = () => {
    setTheme(themePage === "light" ? "dark" : "light");
  };

  const setFontPage = (number) => {
    switch (number) {
      case 0:
        setFont("sans-serif");
        setFontView("Sans Serif");
        break;
      case 1:
        setFont("serif");
        setFontView("Serif");
        break;
      case 2:
        setFont("mono");
        setFontView("Mono");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ themePage, toggleTheme, setFontPage, fontView}}
    >
      {children}
    </ThemeContext.Provider>
  );
};
