import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import logo from "../img/logo.png";
import { MenuItems } from "./SidebarComponents/MenuItems.jsx";
import {
  setSidebarWidth,
  setDarkMode,
  selectsidebarVisible,
  selectdarkMode,
} from "../redux/slices/sidebarSlice";

import styles from "../styles/Sidebar.module.css";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const isClose = useSelector(selectsidebarVisible);
  const darkMode = useSelector(selectdarkMode);
  const darkToggle = () => dispatch(setDarkMode());
  const toggle = () => dispatch(setSidebarWidth());

  useEffect(() => {
    // Применение класса 'dark-mode' к <body>, в зависимости от состояния darkMode
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <nav className={`${styles.sidebar} ${isClose && styles.close}`}>
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
