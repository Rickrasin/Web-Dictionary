import { useQuery } from "react-query";
import axios from "axios";

import Play from "../../../assets/images/icon-play.svg";

import "./PlaySound.css";

const PlaySound = () => {
  const { data, isLoading, error } = useQuery(
    "word",
    () => {
      return axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
        .then((response) => response.data);
    },
    {
      retry: 5,
    }
  );

  if (isLoading) {
    return <h1 className="ps-loading">Loading</h1>;
  }

  if (error) {
    return <h1 className="ps-error">Error</h1>;
  }

  if (data && data.length > 0) {
    const word = data[0];

    return (
      <div className="ps-container">
        <div className="ps-phonetics">
          <h1 className="ps-word">{word.word}</h1>
          <h3 className="ps-text">{word.phonetics[1].text}</h3>
        </div>

        <img src={Play} alt="Play" />
      </div>
    );
  }
};

export default PlaySound;
