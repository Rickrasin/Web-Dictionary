import { useSelector } from "react-redux";
import SoundPlay from "./SoundPlay/SoundPlay";
import Notfound from "./Notfound/NotFound";
import "./WordDetail.css";

const WordDetail = () => {
  const { wordData, wordError, wordEmpty, isLoading } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );

  if (isLoading) {
    return <Notfound />;
  }

  if (wordEmpty) {
    return <div></div>;
  }

  if (wordError) {
    return <Notfound />;
  }

  return (
    <SoundPlay
      wordData={wordData}
      wordError={wordError}
      wordEmpty={wordEmpty}
    />
  );
};

export default WordDetail;
