import "./Home.css";

import Topbar from "./../../components/Topbar/Topbar";
import WordDetail from "../../components/WordDetail/WordDetail";
import SearchBar from "../../components/WordDetail/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="pg-home">
      <Topbar />
      <SearchBar />
      <WordDetail />
    </div>
  );
};

export default Home;
