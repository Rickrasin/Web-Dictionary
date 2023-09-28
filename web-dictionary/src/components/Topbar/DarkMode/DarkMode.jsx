import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DarkMode.css";

import MoonIcon from "./../../../assets/images/icon-moon.svg";
import ThemeActionTypes from "./../../../redux/Theme/action-types";

const DarkMode = () => {
  const { themePage } = useSelector((rootReducer) => rootReducer.themeReducer);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = themePage === "light" ? "dark" : "light";
    dispatch({ type: ThemeActionTypes.SET_THEME, theme: newTheme });
  };

  useEffect(() => {
    const doc = document.querySelector("body");
    doc.setAttribute("data-theme", themePage);
  }, [themePage]);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:hover": {
      "&  .MuiSwitch-track": { backgroundColor: "var(--purple)" },
    },
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },

    "& .MuiSwitch-switchBase": {
      padding: 2,

      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",

        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "var(--purple)" : "var(--purple)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "var(--purple)"
          : "var(--heading-color)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="dk-dark-mode">
      <AntSwitch
        className="dk-input"
        id="dk-toggle"
        checked={themePage === "dark"}
        onClick={toggleTheme}
      ></AntSwitch>
      <img src={MoonIcon} />
    </div>
  );
};

export default DarkMode;
