import { useSelector } from "react-redux";
import SoundPlay from "./SoundPlay/SoundPlay";
import Notfound from "./Notfound/NotFound";
import "./WordDetail.css";

const WordDetail = () => {
  const { wordData, wordError, wordEmpty, isLoading } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );


//TODO: PALAVRA BRACK DANDO PROBLEMA
    //TODO: Audio não está puxando segunda fileira


//TODO: Finalizar loading



  if (isLoading) {
    return <div> Loading</div>;
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
