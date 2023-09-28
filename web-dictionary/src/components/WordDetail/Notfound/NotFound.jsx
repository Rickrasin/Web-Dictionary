import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import PropTypes from "prop-types";
import iconSVG from "./../../../assets/images/icon-emoji.svg";
import "./NotFound.css";

const NotFound = ({ wordData, wordError }) => {
  console.log(wordData, wordError);
  console.log(typeof wordData);
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Verifique se wordData é uma matriz antes de usar o .map
  if (Array.isArray(wordData)) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nf-container">
          <img src={iconSVG} className="nf-emoji" alt="Emoji" />
          {wordData.map((item, index) => {
            return (
              <div key={index} className="nf-desc-container">
                <p className="nf-desc-container-first">{item.title}</p>
                <p className="nf-desc-container-last">
                  {item.message} {item.resolution}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nf-container">
          <img src={iconSVG} className="nf-emoji" alt="Emoji" />
          <div className="nf-desc-container">
            <p className="nf-desc-container-first">{wordData.title}</p>
            <p className="nf-desc-container-last">
              {wordData.message} {wordData.resolution}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
};

NotFound.propTypes = {
  wordData: PropTypes.oneOfType([PropTypes.object, PropTypes.array.isRequired])
    .isRequired,
  wordError: PropTypes.bool.isRequired,
};

export default NotFound;
