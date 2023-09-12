import "./Home.css";

import Topbar from "./../../components/Topbar/Topbar";
import WordContent from "../../components/WordContent/WordContent";

const Home = () => {
  return (
    <div className="pg-home">
      <Topbar  />
      <WordContent  />
    </div>
  );
};

export default Home;
