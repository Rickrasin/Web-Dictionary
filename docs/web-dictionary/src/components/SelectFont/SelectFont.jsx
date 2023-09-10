import "./SelectFont.css";
import Arrow from "./../../assets/images/icon-arrow-down.svg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SelectFont = () => {
  const [fontView, setFontView] = useState("Sans Serif");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const setFontPage = (fontName, viewName) => {
    document.querySelector("body").setAttribute("data-font", fontName);
    setFontView(viewName);
    setIsOptionsVisible(false);
  };
  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  return (
    <div name="typefont" className="sf-select">
      <div className="sf-select-button">
        <button
          id="selected-value"
          className="sf-select-button"
          onClick={toggleOptionsVisibility}
        >
          {fontView} <img src={Arrow} id="sf-arrow" alt="arrow" />
        </button>
      </div>

      <AnimatePresence>
        {isOptionsVisible && isOptionsVisible && (
          <motion.div
            className="sf-select-options"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <button
              type="button"
              className="sf-select-option"
              onClick={() => setFontPage("sans-serif", "Sans Serif")}
              id="sans-serif"
            >
              Sans Serif
            </button>
            <button
              type="button"
              className="sf-select-option"
              onClick={() => setFontPage("serif", "Serif")}
              id="serif"
            >
              Serif
            </button>
            <button
              type="button"
              className="sf-select-option"
              onClick={() => setFontPage("mono", "Mono")}
              id="mono"
            >
              Mono
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectFont;
