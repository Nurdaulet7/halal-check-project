import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import React, { useEffect } from "react";
import { MenuItems } from "./SidebarComponents/MenuItems.jsx";
import {
  setSidebarWidth,
  setDarkMode,
  selectsidebarVisible,
  selectdarkMode,
  setMobileSidebar,
  selectMobileSidebarVisible,
} from "../redux/slices/sidebarSlice";

import styles from "../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 960 });
  const isClose = useSelector(selectsidebarVisible);
  const isMobileMenuVisible = useSelector(selectMobileSidebarVisible);
  const darkMode = useSelector(selectdarkMode);

  useEffect(() => {
    // Восстановление состояния темы из localStorage при загрузке компонента
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      dispatch(setDarkMode(savedDarkMode === "true"));
    }

    // Восстановление состояния видимости боковой панели из localStorage
    const savedSidebarVisible = localStorage.getItem("sidebarVisible");
    if (savedSidebarVisible !== null) {
      dispatch(setSidebarWidth(savedSidebarVisible === "true")); // Убедитесь, что экшен может принимать значение
    }
  }, [dispatch]);

  const darkToggle = () => {
    const newDarkModeState = !darkMode;
    dispatch(setDarkMode(newDarkModeState));
    localStorage.setItem("darkMode", newDarkModeState.toString());
  };

  const toggle = () => {
    const newIsCloseState = isClose;
    dispatch(setSidebarWidth()); // Предполагается, что этот экшен переключает состояние видимости
    localStorage.setItem("sidebarVisible", newIsCloseState.toString());
  };

  const mobileToggle = () => {
    dispatch(setMobileSidebar());
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <nav
        className={`${styles.sidebar}  ${
          !isMobile
            ? isClose && styles.close
            : isMobileMenuVisible && styles.isMobileClose
        }`}
      >
        <header>
          <NavLink to={"/"}>
            <div className={`${styles["image-text"]}`}>
              <span className={styles.image}>
                <svg
                  width="47"
                  height="43"
                  viewBox="0 0 47 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7609 42.5943C18.8096 42.5943 16.0665 42.0648 13.5318 41.0057C10.9971 39.9467 8.7922 38.4797 6.9172 36.6047C5.0422 34.7297 3.57518 32.5248 2.51615 29.9901C1.45713 27.4554 0.927612 24.7123 0.927612 21.7609C0.927612 18.8443 1.45713 16.1186 2.51615 13.5839C3.57518 11.0491 5.0422 8.84428 6.9172 6.96928C8.7922 5.09428 10.9971 3.61858 13.5318 2.5422C16.0665 1.46581 18.8096 0.927612 21.7609 0.927612C24.3651 0.927612 26.7957 1.34428 29.0526 2.17761C31.3096 3.01095 33.3408 4.15678 35.1464 5.61511L32.9068 7.8547C31.379 6.63942 29.6776 5.70192 27.8026 5.0422C25.9276 4.38247 23.9137 4.05261 21.7609 4.05261C16.7262 4.05261 12.5162 5.74532 9.13074 9.13074C5.74532 12.5162 4.05261 16.7262 4.05261 21.7609C4.05261 26.7957 5.74532 31.0057 9.13074 34.3912C12.5162 37.7766 16.7262 39.4693 21.7609 39.4693C23.0457 39.4693 24.287 39.3478 25.4849 39.1047C26.6828 38.8616 27.8373 38.4971 28.9484 38.011L31.2922 40.4068C29.8686 41.1012 28.3582 41.6394 26.7609 42.0214C25.1637 42.4033 23.4971 42.5943 21.7609 42.5943ZM36.8651 37.9068V31.6568H30.6151V28.5318H36.8651V22.2818H39.9901V28.5318H46.2401V31.6568H39.9901V37.9068H36.8651ZM18.688 31.2401L10.0943 22.5943L12.438 20.2505L18.688 26.5005L40.2505 4.93803L42.6464 7.28178L18.688 31.2401Z"
                    // fill={darkMode ? "#2a8f5c" : "#47B859"}
                    fill={"#47B859"}
                  />
                </svg>
              </span>
              <div className={`${styles.text} ${styles["header-text"]}`}>
                <span className={styles.name}>HalalCheck</span>
                <span className={styles.subtext}>
                  Your halal lifestyle companion
                </span>
              </div>
            </div>
          </NavLink>
          {isMobile && (
            <button className={styles.closeIcon} onClick={mobileToggle}>
              <IoClose />
            </button>
          )}
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
