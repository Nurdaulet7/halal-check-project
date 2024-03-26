import { useState } from "react";
import "./FilterMenuItem.css";
import { IoIosArrowDown } from "react-icons/io";

export const FilterMenuItem = () => {
  const menuFilter = [
    {
      category: "Milk products",
      subCategory: ["Milk", "Kumys", "Shybat", "Cheese"],
    },
    {
      category: "Meat products",
      subCategory: ["Meat", "Chicken", "Fish"],
    },
    {
      category: "Milk products",
      subCategory: ["Milk", "Kumys", "Shybat", "Cheese"],
    },
    {
      category: "Milk products",
      subCategory: ["Milk", "Kumys", "Shybat", "Cheese"],
    },
  ];
  // Состояние для отслеживания расширенных элементов
  const [expanded, setExpanded] = useState(null);

  // Обработчик клика по элементу
  const handleItemClick = (index) => {
    if (expanded === null) {
      setWrapped(index);
    } else {
      setWrapped(null);
    }
    setExpanded(expanded === index ? null : index); // Расширять или сворачивать элемент
  };

  const [wrapped, setWrapped] = useState(null);
  const handleWrapClick = (index) => {
    if (wrapped === null) {
      setExpanded(index);
    } else {
      setExpanded(null);
    }
    setWrapped(wrapped === index ? null : index);
  };

  return (
    <div className="wrapper">
      <ul className="items">
        {menuFilter.map((product, index) => (
          <li key={index}>
            <div className="menuWrap">
              <a
                href="#!"
                onClick={() => handleItemClick(index)}
                className={expanded === index ? "active" : ""}
              >
                {product.category}
              </a>
              <a
                style={{ transition: "transform 0.5s ease" }}
                onClick={() => handleWrapClick(index)}
                className={`${
                  wrapped === index || expanded == index
                    ? "rotate"
                    : "rotateBack"
                }${wrapped === index ? "active" : ""}`}
              >
                <IoIosArrowDown />
              </a>
            </div>

            <ul
              className={`sub-items ${
                expanded === index || wrapped === index ? "show" : ""
              }`}
            >
              {product.subCategory.map((sub, subIndex) => (
                <li key={subIndex}>
                  <a href="#!">{sub}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
