import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SelectFont.css";

import Arrow from "./../../../assets/images/icon-arrow-down.svg";
import ThemeActionTypes from "./../../../redux/Theme/action-types";

const SelectFont = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const { fontView, fontPage } = useSelector(
    (rootReducer) => rootReducer.themeReducer
  );
  const dispatch = useDispatch();

  const setFontPage = (fontViewString, fontPageString) => {
    setIsOptionsVisible(false);
    dispatch({
      type: ThemeActionTypes.SET_FONT,
      fontView: fontViewString,
      fontPage: fontPageString,
    });
  };

  useEffect(() => {
    document.querySelector("body").setAttribute("data-font", fontPage);
    setIsOptionsVisible(false);
  }, [fontView, fontPage]);

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
              onClick={() => setFontPage("Sans Serif", "sans-serif")}
              id="sans-serif"
            >
              Sans Serif
            </button>
            <button
              type="button"
              className="sf-select-option"
              onClick={() => setFontPage("Serif", "serif")}
              id="serif"
            >
              Serif
            </button>
            <button
              type="button"
              className="sf-select-option"
              onClick={() => setFontPage("Mono", "mono")}
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
