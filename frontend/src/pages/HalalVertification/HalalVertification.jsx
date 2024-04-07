import { Outlet } from "react-router-dom";
import { selectProducts } from "../../redux/slices/productSlice";
import { HeaderMain } from "./HeaderMain";
import styles from "../../components/FilterComponents/Filter.module.css";
import { StatusIncticator } from "../../components/FilterComponents/StatusIncticatorOfProduct";
import { FilterMenuItem } from "../../components/FilterComponents/FilterMenuItem";
import { setCategoryFilter } from "../../redux/slices/filterProductsSlice";

export const HalalVertification = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <div className={styles.filterContainer}>
        <StatusIncticator />
        <FilterMenuItem
          selector={selectProducts}
          actionSetCategoryFilter={setCategoryFilter}
          hasSubcategories={true}
        />
      </div>
    </>
  );
};
