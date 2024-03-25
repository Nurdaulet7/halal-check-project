import { useState } from "react";

export const FilterMenuItem = ({ menuTitle, subMenus = [] }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleDropDown = () => {
    setIsopen((isOpen) => !isOpen);
  };

  return (
    <li onClick={toggleDropDown}>
      <a href="#settings">{menuTitle}</a>
      {isOpen && (
        <ul>
          {subMenus.map((item) => (
            <li>
              <a href="#settings">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
