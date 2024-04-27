import { Outlet } from "react-router-dom";
import { selectProducts } from "../../redux/slices/productSlice";
import { HeaderMain } from "./HeaderMain";
import styles from "../../components/FilterComponents/Filter.module.css";
import { StatusIncticator } from "../../components/FilterComponents/StatusIncticatorOfProduct";
import { FilterMenuItem } from "../../components/FilterComponents/FilterMenuItem";
import { setCategoryFilter } from "../../redux/slices/filterProductsSlice";
import { FilterProvider } from "../../components/FilterComponents/FilterProvider";
import { Footer } from "../../components/Footer/Footer";

export const HalalVertification = () => {
  const filterProps = {
    selector: selectProducts,
    actionSetCategoryFilter: setCategoryFilter,
    hasSubcategories: true,
    forEnterprises: false,
    path: "vertification",
  };
  return (
    <FilterProvider value={filterProps}>
      <HeaderMain />
      <Outlet />
      <div className={styles.filterContainer}>
        <StatusIncticator type={"products"} />
        <FilterMenuItem />
      </div>
      <Footer />
    </FilterProvider>
  );
};
