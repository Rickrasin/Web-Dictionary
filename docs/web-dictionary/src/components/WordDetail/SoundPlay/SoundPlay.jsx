import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

import "./SoundPlay.css";

const SoundPlay = ({ wordData, wordError, wordEmpty }) => {
  const [audioRunning, setAudioRunning] = useState(false);
  const [audio, setAudio] = useState(null);

  const playAudio = (audioUrl) => {
    if (!audioUrl) return;
    const newAudio = new Audio(audioUrl);
    newAudio.currentTime = 0.1;
    newAudio.play();
    setAudioRunning(true);
    newAudio.addEventListener("ended", () => {
      setAudioRunning(false);
      setAudio(null);
    });
    setAudio(newAudio);
  };

  const stopAudio = () => {
    audio.pause();
    setAudioRunning(false);
    setAudio(null);
  };

  function getFieldValue(obj, fieldName) {
    for (const element of obj) {
      if (Object.hasOwn(element, fieldName)) {
        console.log(element);
        return element[fieldName];
      } else {
        return null;
      }
    }
  }

  //Render
  if ((wordData || wordError || wordEmpty) && wordData.length > 0) {
    const word = wordData[0];
    const phonetic = word.phonetics;
    const audioURL = getFieldValue(phonetic, "audio");
    const phoneticText = getFieldValue(phonetic, "text");
    console.log(word);
    console.log(phoneticText);
    //console.log(audioURL);
    return (
      <div className="sp-container">
        <div className="sp-play-container">
          <motion.div key="title" className="sp-phonetics">
            <h1 className="sp-word">{word?.word}</h1>
            <h3 className="sp-text">{phoneticText}</h3>
          </motion.div>

          <button
            className="sp-play-button"
            onClick={() => {
              !audioRunning && audioURL ? playAudio(audioURL) : stopAudio();
            }}
          >
            <div id="playButton" className={audioURL ? "" : "fa-disable"}>
              {audioRunning ? (
                <motion.div
                  key="stop"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="fa fa-stop"
                />
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="fa fa-play"
                />
              )}
            </div>
          </button>
        </div>
      </div>
    );
  }
};

SoundPlay.propTypes = {
  wordData: PropTypes.array.isRequired,
  wordError: PropTypes.bool.isRequired,
  wordEmpty: PropTypes.bool.isRequired,
};

export default SoundPlay;
