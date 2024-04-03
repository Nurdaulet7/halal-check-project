import React, { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { FilterMenuItem } from "./FilterMenuItem";
import "./FilterMenuItem.css";

const MobileFilter = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div className={`mobileWrapper ${showComponent ? "show" : "hide"}`}>
      <button onClick={handleButtonClick}>
        <p>Chose the category</p>
        {showComponent ? <FaAnglesUp id="icon" /> : <FaAnglesDown id="icon" />}
      </button>
      {showComponent && <FilterMenuItem />}{" "}
    </div>
  );
};

export default MobileFilter;
