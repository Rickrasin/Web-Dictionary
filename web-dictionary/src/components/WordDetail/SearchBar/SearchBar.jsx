import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./SearchBar.css";

import { setWordData } from "../../../redux/API/apiReducer";
//import { faL } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wordEmpty, setWordEmpty] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm === "" || searchTerm === null) {
      console.log("vazio");
      setWordEmpty(true);
    } else {
      console.log("cheio");
      console.log(searchTerm);
      setWordEmpty(false);
      dispatch(setWordData(searchTerm));
    }
  };

  return (
    <div className="sb-container ">
      <form
        className="sb-search-bar"
        action="/pesquisar"
        method="get"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`sb-search-input ${wordEmpty ? "sb-error" : ""}`}
          id="search-input"
          name="search"
          placeholder="Search for any word..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {wordEmpty && (
          // eslint-disable-next-line react/no-unescaped-entities
          <motion.div animate={{ opacity: [0, 0.5, 1], scaleY: [0.6, 1] }}>
            <p className="sb-error-text">Whoops, can't be empty...</p>
          </motion.div>
        )}
      </form>
      <div className="suggestions">
        <ul id="suggestion-list"></ul>
      </div>
    </div>
  );
};

export default SearchBar;
