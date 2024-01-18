import { useEffect, useState } from "react";
import { initTheme, toggleDarkMode } from "../assets/js/theme";
import { getCssVar } from "../assets/js/utils";

import { FiMoon, FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

export const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const themeHandler = initTheme();
    setDarkMode(themeHandler.isDarkMode);
    return () => {
      themeHandler.cleanup();
    };
  }, []);

  const toggleMobileNav = (value?: boolean) => {
    const elem = document.getElementsByClassName("nav-mobile")[0];
    if (value === undefined) {
      elem.classList.toggle("hidden");
    } else {
      if (value) elem.classList.remove("hidden");
      else elem.classList.add("hidden");
    }
  };

  return (
    <>
      <nav>
        <a href="/" className="nav__logo">
          dawar.
        </a>
        <div style={{ display: "flex" }}>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            onClick={() => {
              setDarkMode(toggleDarkMode().isDarkMode);
            }}
            className="btn-icon"
          >
            {darkMode ? <FiSun color="white" /> : <FiMoon />}
          </button>

          <button
            className="btn-nav-mobile btn-icon"
            onClick={() => {
              toggleMobileNav(true);
            }}
          >
            <CgMenuRight color={getCssVar("--foreground-color")} />
          </button>
        </div>
      </nav>
      <div className="nav-mobile hidden">
        <button
          className="btn-icon"
          onClick={() => {
            toggleMobileNav(false);
          }}
        >
          <RxCross2 color={getCssVar("--foreground-color")} />
        </button>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
