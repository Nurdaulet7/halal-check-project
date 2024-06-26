import { Outlet } from "react-router-dom";
import styles from "../../components/FilterComponents/Filter.module.css";
import { HeaderCertificatePage } from "./HeaderCertificatePage";
import { StatusIncticator } from "../../components/FilterComponents/StatusIncticatorOfProduct";
import { FilterMenuItem } from "../../components/FilterComponents/FilterMenuItem";
import { setCategoryFilter } from "../../redux/slices/filterEnterprise";
import { selectEnterprises } from "../../redux/slices/certificateSlice";
import { FilterProvider } from "../../components/FilterComponents/FilterProvider";
import { Footer } from "../../components/Footer/Footer";

export const HalalCertification = () => {
  const filterProps = {
    selector: selectEnterprises,
    actionSetCategoryFilter: setCategoryFilter,
    hasSubcategories: false,
    forEnterprises: true,
    path: "certificate",
  };

  return (
    <FilterProvider value={filterProps}>
      <HeaderCertificatePage />
      <Outlet />
      <div className={styles.filterContainer}>
        <StatusIncticator enterprisePage={true} type={"company"} />
        <FilterMenuItem />
      </div>
      <Footer />
    </FilterProvider>
  );
};
