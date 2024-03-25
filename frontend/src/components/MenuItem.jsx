import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

export const MenuItem = ({ item }) => {
  const { path, icon, name } = item;
  return (
    <li className="nav-link">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        <i className={styles.icon}>{icon}</i>
        <span className={`${styles.text} ${styles.navText}`}>{name}</span>
      </NavLink>
    </li>
  );
};
