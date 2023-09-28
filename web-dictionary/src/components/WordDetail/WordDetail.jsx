import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Notfound from "./Notfound/NotFound";
import SoundPlay from "./SoundPlay/SoundPlay";
import WordBody from "./WordBody/WordBody";
import "./WordDetail.css";

const WordDetail = () => {
  const { wordData, wordError, isLoading } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );
  const ref = useRef(null);
  const isInView = useInView(ref);

  const SourceURL = !wordError && wordData ? wordData[0].sourceUrls : null;

  // TODO: Finalizar loading

  if (isLoading) {
    return <div> Loading</div>;
  }

  if (wordError) {
    console.log("Error loading");
    return <Notfound wordData={wordData} wordError={wordError} />;
  }

  return (
    <div className=" wd-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SoundPlay wordData={wordData} wordError={wordError} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WordBody wordData={wordData} wordError={wordError} />
      </motion.div>
      <div className="wd-url-container">
        <div className="wb-line"></div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SourceURL && (
            <div className="wd-url-body">
              <h4 className="wd-url-title">Source</h4>
              <div className="wd-url-link-container">
                <a href={SourceURL} className="wd-url-link">
                  {SourceURL}
                </a>
                <FontAwesomeIcon
                  className="wd-external-link"
                  size="2xs"
                  icon={faArrowUpRightFromSquare}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WordDetail;
