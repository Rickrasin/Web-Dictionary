import "./DarkMode.css";


const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dk-dark-mode">
      <button
        type="checkbox"
        className="dk-input"
        id="dk-toggle"
        onChange={toggleTheme}
      />
    </div>
  );
};

export default DarkMode;
