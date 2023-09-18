import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.css";

import { setWordData } from "../../../redux/API/apiReducer";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { wordData, wordError, wordEmpty } = useSelector(
    (rootReducer) => rootReducer.apiReducer
  );

  const dispatch = useDispatch();
  const { themePage } = useSelector((rootReducer) => rootReducer.themeReducer);
  console.log(wordEmpty, wordError, wordData, themePage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Usa o dispatch para despachar a ação setWordData com o searchTerm
    dispatch(setWordData(searchTerm));
    console.log(wordData);
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
          className={`sb-search-input ${wordEmpty ? "sb-error" : " "}`}
          id="search-input"
          name="search"
          placeholder="Search for any word..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {wordEmpty && (
          // eslint-disable-next-line react/no-unescaped-entities
          <p className="sb-error-text">Whoops, can't be empty...</p>
        )}
      </form>
      <div className="suggestions">
        <ul id="suggestion-list"></ul>
      </div>
    </div>
  );
};

export default SearchBar;
