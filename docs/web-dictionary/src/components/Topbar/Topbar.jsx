import "./Topbar.css";

import LogoIcon from "./../../assets/images/logo.svg";
import MoonIcon from "./../../assets/images/icon-moon.svg";
import DarkMode from "./../../components/DarkMode/DarkMode";
import SelectFont from "../SelectFont/SelectFont";

const Topbar = () => {
  return (
    <div className="tb-container ">
      <img src={LogoIcon}></img>

      <div className="tb-buttons-container">
        <SelectFont />
        <div className="tb-line"></div>
        <div className="tb-checkbox-container">
          <DarkMode></DarkMode>
          <img src={MoonIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
