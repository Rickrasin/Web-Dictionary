import "./Topbar.css";

import LogoIcon from "./../../assets/images/logo.svg";
import MoonIcon from "./../../assets/images/icon-moon.svg";

const Topbar = () => {
  return (
    <div className="tb-container ">
      <img src={LogoIcon}></img>

      <div className="tb-buttons-container">
        <select name="typefont">
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>
        <div>
          <button type="button">:Toggle:</button>
          <img src={MoonIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
