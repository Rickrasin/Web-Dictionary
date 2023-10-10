import { useState } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "./../../../assets/images/icon-search.svg";
import { motion, useAnimation } from "framer-motion";
import "./SearchBar.css";

import { setWordData } from "../../../redux/API/apiReducer";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wordEmpty, setWordEmpty] = useState(false);
  const controls = useAnimation();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleClick = () => {
    // Iniciar a animação quando o botão for clicado
    controls.start({ scale: 1, opacity: 0.1 });

    // Definir um timeout para reverter a animação após um período (por exemplo, 1 segundo)
    setTimeout(() => {
      controls.start({ scale: 0, opacity: 0 });
    }, 340);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm === "" || searchTerm === null) {
      setWordEmpty(true);
    } else {
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

        <button
          className="sb-search-btn"
          onClick={handleClick}
          onSubmit={handleSearch}
          type="submit"
        >
          <img src={searchIcon} />
          <motion.div
            className="sb-circle"
            initial={{ scale: 0 }}
            animate={controls}
          />
        </button>

        {wordEmpty && (
          // eslint-disable-next-line react/no-unescaped-entities
          <motion.div animate={{ opacity: [0, 0.5, 1], scaleY: [0.6, 1] }}>
            <p className="sb-error-text">Whoops, can&lsquo;t be empty...</p>
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
