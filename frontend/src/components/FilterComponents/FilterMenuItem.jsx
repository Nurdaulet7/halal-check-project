import { IoIosArrowDown } from "react-icons/io";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./FilterMenuItem.css";
import { setCategoryFilter } from "../../redux/slices/filterProductsSlice";
import { useFilterContext } from "./FilterProvider";

export const FilterMenuItem = () => {
  const {
    selector,
    actionSetCategoryFilter,
    hasSubcategories,
    forEnterprises,
    path,
  } = useFilterContext();
  const items = useSelector(selector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuFilter = useMemo(() => {
    const filter = [];

    items.forEach((item) => {
      const categoryKey = forEnterprises ? "companyType" : "category";
      const subCategoryKey = forEnterprises ? "" : "subCategory"; // Предполагаем, что может быть другой ключ для подкатегорий

      const categoryName = item[categoryKey]?.name;
      const subCategory = item[subCategoryKey];
      let categoryItem = filter.find((it) => it.category === categoryName);
      if (!categoryItem) {
        categoryItem = {
          category: categoryName,
          subCategory: [],
        };
        filter.push(categoryItem);
      }

      if (
        hasSubcategories &&
        subCategory &&
        !categoryItem.subCategory.includes(subCategory.name)
      ) {
        categoryItem.subCategory.push(subCategory.name);
      }
    });

    return filter;
  }, [items, hasSubcategories, forEnterprises]);

  const [expanded, setExpanded] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [wrapped, setWrapped] = useState(null);

  const handleItemClick = (index) => {
    navigate(`/${path}`);
    const categoryName = menuFilter[index].category;
    if (categoryName === activeCategory) {
      dispatch(actionSetCategoryFilter(""));
      setActiveCategory(null);
    } else {
      dispatch(actionSetCategoryFilter(categoryName));
      setActiveCategory(categoryName);
    }
    setExpanded(expanded === index ? null : index);
  };

  const handleCategorySelect = (categoryName) => {
    navigate(`/${path}`);
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
              {hasSubcategories && (
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
              )}
            </div>
            {hasSubcategories && (
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
