import { NavLink } from "react-router-dom";

export const MenuItem = ({ item }) => {
  const { path, icon, name } = item;
  return (
    <li className="nav-link">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "activeLink nav-link" : "nav-link"
        }
      >
        <i className="icon">{icon}</i>
        <span className="text nav-text">{name}</span>
      </NavLink>
    </li>
  );
};
