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
    setExpanded(expanded === index ? null : index); // Расширять или сворачивать элемент
  };

  return (
    <div className="wrapper">
      <ul className="items">
        {menuFilter.map((product, index) => (
          <li key={index}>
            <a
              href="#!"
              onClick={() => handleItemClick(index)}
              className={expanded === index ? "active" : ""}
            >
              {product.category}
              <a className={expanded === index ? "rotate" : "rotateBack"}>
                <IoIosArrowDown />
              </a>
            </a>
            <ul className={`sub-items ${expanded === index ? "show" : ""}`}>
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
