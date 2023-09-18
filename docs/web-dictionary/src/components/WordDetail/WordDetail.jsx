import { useSelector } from "react-redux";
import SoundPlay from "./SoundPlay/SoundPlay";
import "./WordDetail.css";

const WordDetail = () => {
  const { wordData, wordError, wordEmpty } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );

  if (wordEmpty) {
    return <div></div>;
  }

  if (wordError) {
    return <div>Palavra não encontrada</div>;
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
