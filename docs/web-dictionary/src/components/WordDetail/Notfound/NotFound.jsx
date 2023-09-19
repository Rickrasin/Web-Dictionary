/* eslint-disable react/no-unescaped-entities */
import iconSVG from "./../../../assets/images/icon-emoji.svg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="nf-container">
      <img src={iconSVG} className="nf-emoji"></img>
      <div className="nf-desc-container">
        <p className="nf-desc-container-first">No Definitions Found</p>
        <p className="nf-desc-container-last">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
