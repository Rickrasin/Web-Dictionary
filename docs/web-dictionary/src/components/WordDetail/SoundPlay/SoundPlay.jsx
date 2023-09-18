import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

import "./SoundPlay.css";

const SoundPlay = ({ wordData, wordError, wordEmpty }) => {
  const [audioRunning, setAudioRunning] = useState(false);
  const [audio, setAudio] = useState(null);

  const playAudio = (audioUrl) => {
    console.log(wordData);
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

  const playAudioWithValidPhonetics = (phonetics) => {
    let audioIndex = -1;

    // Procura o primeiro índice com um áudio válido
    for (let i = 0; i < phonetics.length; i++) {
      if (phonetics[i].audio) {
        audioIndex = i;
        break; // Encontrou um áudio válido, sai do loop
      }
      console.log("audio: " + phonetics[i].audio);
    }

    if (audioIndex !== -1) {
      return phonetics[audioIndex].audio;
    } else {
      // Não encontrou nenhum áudio válido, pode lidar com isso aqui
      console.log("Nenhum áudio válido encontrado.");
      return null;
    }
  };

  //Render
  if ((wordData || wordError || wordEmpty) && wordData.length > 0) {
    const word = wordData[0];
    const audioURL = playAudioWithValidPhonetics(word.phonetics);
    return (
      <div className="sp-container">
        <div className="sp-play-container">
          <motion.div key="title" className="sp-phonetics">
            <h1 className="sp-word">{word.word}</h1>
            <h3 className="sp-text">{word.phonetics[1].text}</h3>
          </motion.div>

          <button
            className="sp-play-button"
            onClick={() => {
              !audioRunning ? playAudio(audioURL) : stopAudio();
            }}
          >
            <div id="playButton">
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
