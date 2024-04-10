import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";
import { useMediaQuery } from "react-responsive";

export const MenuItem = ({ item }) => {
  const { path, icon, name } = item;
  const isMobile = useMediaQuery({ maxWidth: 540 });

  return (
    <li
      className={
        !isMobile && name === "Barcode Scanner" ? styles.hideBarcode : ""
      }
    >
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
