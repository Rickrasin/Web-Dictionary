import "./SelectFont.css";
import Arrow from "./../../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import { useEffect } from "react";

const SelectFont = () => {
  const [fontValue, setFontValue] = useState("sans-serif");
  const [fontName, setFontName] = useState("Sans Serif");

  useEffect(() => {
    setFontPage(fontValue);
  }, [fontValue]);

  const setFontPage = (fontName) => {
    document.querySelector("body").setAttribute("data-font", fontName);
  };

  const handleFontChange = (fontName, viewName) => {
    setFontValue(fontName);
    setFontName(viewName);
  };

  return (
    <div name="typefont" className="sf-select">
      <div className="sf-select-button">
        <button id="selected-value" className="sf-select-button">
          {fontName} <img src={Arrow} id="sf-arrow" alt="arrow" />
        </button>
      </div>

      <div className="sf-select-options">
        <button
          type="button"
          className="sf-select-option"
          onClick={() => handleFontChange("sans-serif", "Sans Serif")}
          id="sans-serif"
        >
          Sans Serif
        </button>

        <button
          type="button"
          className="sf-select-option"
          onClick={() => handleFontChange("serif", "Serif")}
          id="serif"
        >
          Serif
        </button>

        <button
          type="button"
          className="sf-select-option"
          onClick={() => handleFontChange("mono", "Mono")}
          id="mono"
        >
          Mono
        </button>
      </div>
    </div>
  );
};

export default SelectFont;
