import { Outlet } from "react-router-dom";
import styles from "../../components/FilterComponents/Filter.module.css";
import { HeaderCertificatePage } from "./HeaderCertificatePage";
import { StatusIncticator } from "../../components/FilterComponents/StatusIncticatorOfProduct";
import { FilterMenuItem } from "../../components/FilterComponents/FilterMenuItem";
import { setCategoryFilter } from "../../redux/slices/filterEnterprise";
import { selectEnterprises } from "../../redux/slices/certificateSlice";

export const HalalCertification = () => {
  return (
    <>
      <HeaderCertificatePage />
      <Outlet />
      <div className={styles.filterContainer}>
        <StatusIncticator />
        <FilterMenuItem
          selector={selectEnterprises}
          actionSetCategoryFilter={setCategoryFilter}
          hasSubcategories={false}
          forEnterprises={true}
        />
      </div>
    </>
  );
};
