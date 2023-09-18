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

  const validateObjectArray = (objData, value = 0) => {
    let audioIndex = -1;
    for (let i = 0; i < objData.length; i++) {
      if (objData[i]) {
        audioIndex = i;
        break;
      }
    }

    if (audioIndex !== -1) {
      return objData[audioIndex + value];
    } else {
      console.log("Nenhum objeto válido encontrado.");
      return null;
    }
  };

  // const filterObjectValues = (objData, value) => {
  //   objData.filter((word) => word)
  // }

  //Render
  if ((wordData || wordError || wordEmpty) && wordData.length > 0) {
    const word = wordData[0];
    const phonetic = validateObjectArray(word.phonetics);
    const audioURL = phonetic ? phonetic.audio : null;
    console.log(word);
    console.log(phonetic);
    console.log(audioURL);
    return (
      <div className="sp-container">
        <div className="sp-play-container">
          <motion.div key="title" className="sp-phonetics">
            <h1 className="sp-word">{word?.word}</h1>
            <h3 className="sp-text">
              {phonetic != null ? phonetic.text : ""}
            </h3>
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
