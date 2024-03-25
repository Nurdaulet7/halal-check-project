import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { MenuItems } from "./SidebarComponents/MenuItems.jsx";
import styles from "../styles/Sidebar.module.css";

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
    <div className={styles.container}>
      <nav className={`${styles.sidebar} ${isOpen && styles.close}`}>
        <header>
          <div className={`${styles["image-text"]}`}>
            <span className={styles.image}>
              <img src={logo} alt="logo" />
            </span>

            <div className={`${styles.text} ${styles["header-text"]}`}>
              <span className={styles.name}>HalalCheck</span>
              <span className={styles.subtext}>
                Your halal lifestyle companion
              </span>
            </div>
          </div>

          <i
            className={`bx bxs-chevron-left ${styles.toggle}`}
            onClick={toggle}
          />
        </header>

        <div className={`${styles["menu-bar"]}`}>
          <div className={styles.menu}>
            <MenuItems />
          </div>
          <div className={styles["bottom-content"]}>
            <li className={styles.mode}>
              <div className={styles["moon-sun"]}>
                <i className={`bx bx-sun ${styles.icon} ${styles.moon}`} />
                <i className={`bx bx-moon ${styles.icon} ${styles.sun}`} />
              </div>

              <span className={`${styles["mode-text"]} ${styles.text}`}>
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>

              <div
                onClick={darkToggle}
                className={`${styles["toggle-switch"]} ${
                  darkMode ? "dark" : ""
                }`}
              >
                <span className={styles.switch}></span>
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
