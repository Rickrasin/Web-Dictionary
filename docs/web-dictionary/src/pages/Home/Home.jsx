import "./Home.css";

import Topbar from "./../../components/Topbar/Topbar";
import WordDetail from "../../components/WordDetail/WordDetail";

const Home = () => {
  return (
    <div className="pg-home">
      <Topbar />
      <WordDetail />
    </div>
  );
};

export default Home;
