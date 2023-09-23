import "./Home.css";

// import { useSelector } from "react-redux";
import SearchBar from "../../components/WordDetail/SearchBar/SearchBar";
import WordDetail from "../../components/WordDetail/WordDetail";
import Topbar from "./../../components/Topbar/Topbar";

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
