import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { MenuItems } from "./MenuItems";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const darkToggle = () => setDarkMode(!darkMode);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Применение класса 'dark-mode' к <body>, в зависимости от состояния darkMode
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="container">
      <nav className={isOpen ? "sidebar close" : "sidebar"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>

            <div className="text header-text">
              <span className="name">HalalCheck</span>
              <span className="subtext">Your halal lifestyle companion</span>
            </div>
          </div>

          <i className="bx bxs-chevron-left toggle" onClick={toggle}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <MenuItems />
          </div>
          <div className="bottom-content">
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">DarkMode</span>

              <div
                onClick={darkToggle}
                className={darkMode ? "toggle-switch dark" : "toggle-switch"}
              >
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
