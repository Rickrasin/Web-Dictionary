import axios from "axios";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { useAudio } from "../../context/AudioContext";

import "./WordDetail.css";

const WordDetail = () => {
  const { data, isLoading, error } = useQuery(
    "word",
    async () => {
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      return response.data;
    },
    {
      retry: 5,
    }
  );

  const { playAudio, stopAudio, audioRunning } = useAudio(); // Tocar um som por vez

  if (isLoading) {
    return <h1 className="ps-loading">Loading</h1>;
  }

  if (error) {
    return <h1 className="ps-error">Error</h1>;
  }

  if (data && data.length > 0) {
    const word = data[0];

    return (
      <div className="wc-container">
        <div className="wc-play-container">
          <motion.div key="title" className="wc-phonetics">
            <h1 className="wc-word">{word.word}</h1>
            <h3 className="wc-text">{word.phonetics[1].text}</h3>
          </motion.div>

          <button
            className="wc-play-button"
            onClick={() => {
              audioRunning ? stopAudio() : playAudio(word.phonetics[0].audio);
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

export default WordDetail;
