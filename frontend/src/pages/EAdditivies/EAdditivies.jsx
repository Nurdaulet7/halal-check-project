import { Outlet } from "react-router-dom";
import { HeaderEAdditivies } from "./HeaderEAdditivies";
import { setCategoryFilter } from "../../redux/slices/filterAdditiviesSlice";
import { FilterMenuItem } from "../../components/FilterComponents/FilterMenuItem";
import { selectAdditivies } from "../../redux/slices/additiveSlice";
import styles from "../../components/FilterComponents/Filter.module.css";
import { StatusIncticator } from "../../components/FilterComponents/StatusIncticatorOfProduct";
import { FilterProvider } from "../../components/FilterComponents/FilterProvider";

export const EAdditivies = () => {
  const filterProps = {
    selector: selectAdditivies,
    actionSetCategoryFilter: setCategoryFilter,
    hasSubcategories: false,
    forEnterprises: false,
  };
  return (
    <FilterProvider value={filterProps}>
      <HeaderEAdditivies />
      <Outlet />
      <div className={styles.filterContainer}>
        <StatusIncticator />
        <FilterMenuItem />
      </div>
    </FilterProvider>
  );
};
