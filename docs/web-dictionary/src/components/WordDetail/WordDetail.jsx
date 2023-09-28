import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Notfound from "./Notfound/NotFound";
import SoundPlay from "./SoundPlay/SoundPlay";
import WordBody from "./WordBody/WordBody";
import "./WordDetail.css";

const WordDetail = () => {
  const { wordData, wordError, wordEmpty, isLoading } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );
  const SourceURL = !wordError && wordData ? wordData[0].sourceUrls : null;

  //TODO: Fix SoundPlay
  //TODO: Audio não está puxando segunda fileira

  //TODO: Finalizar loading

  if (isLoading) {
    return <div> Loading</div>;
  }

  if (wordEmpty) {
    return <div></div>;
  }

  if (wordError) {
    return <Notfound wordData={wordData} wordError={wordError} />;
  }

  return (
    <div className=" wd-container">
      <SoundPlay
        wordData={wordData}
        wordError={wordError}
        wordEmpty={wordEmpty}
      />
      <WordBody
        wordData={wordData}
        wordError={wordError}
        wordEmpty={wordEmpty}
      />

      <div className="wd-url-container">
        <div className="wb-line"></div>

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
      </div>
    </div>
  );
};

export default WordDetail;
