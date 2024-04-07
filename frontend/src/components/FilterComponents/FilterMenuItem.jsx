import { IoIosArrowDown } from "react-icons/io";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/productSlice";
import "./FilterMenuItem.css";
import { setCategoryFilter } from "../../redux/slices/filterProductsSlice";

export const FilterMenuItem = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  // Создаем menuFilter, используя useMemo для оптимизации производительности
  const menuFilter = useMemo(() => {
    const filter = [];

    products.forEach((product) => {
      const { category, subCategory } = product;

      let categoryItem = filter.find((item) => item.category === category.name);
      if (!categoryItem) {
        categoryItem = {
          category: category.name,
          subCategory: [],
        };
        filter.push(categoryItem);
      }

      if (subCategory && !categoryItem.subCategory.includes(subCategory.name)) {
        categoryItem.subCategory.push(subCategory.name);
      }
    });

    return filter;
  }, [products]);
  // Состояние для отслеживания расширенных элементов
  const [expanded, setExpanded] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null); // Состояние для отслеживания активной категории
  const [wrapped, setWrapped] = useState(null);

  // Обработчик клика по элементу
  const handleItemClick = (index) => {
    const categoryName = menuFilter[index].category;
    if (categoryName === activeCategory) {
      dispatch(setCategoryFilter("")); // Отправляем сброс фильтра
      setActiveCategory(null); // Сброс активной категории
    } else {
      dispatch(setCategoryFilter(categoryName));
      setActiveCategory(categoryName); // Обновляем активную категорию
    }
    setExpanded(expanded === index ? null : index);
  };

  const handleCategorySelect = (categoryName) => {
    if (categoryName === activeCategory) {
      dispatch(setCategoryFilter("")); // Сброс фильтра
      setActiveCategory(null);
    } else {
      dispatch(setCategoryFilter(categoryName));
      setActiveCategory(categoryName);
    }
  };

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
                onClick={() => handleItemClick(index)}
                className={expanded === index ? "active" : ""}
              >
                {product.category}
              </a>
              <a
                style={{ transition: "transform 0.5s ease" }}
                onClick={() => handleWrapClick(index)}
                className={`${
                  wrapped === index || expanded === index
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
                  <a onClick={() => handleCategorySelect(sub)}>{sub}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
