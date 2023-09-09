import "./SelectFont.css";

//import ArrowDown from "../../assets/images/icon-arrow-down.svg";

const SelectFont = () => {
  return (
    <div className="sf-container">
      <select name="typefont" className="sf-select">
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
     
    </div>
  );
};

export default SelectFont;
