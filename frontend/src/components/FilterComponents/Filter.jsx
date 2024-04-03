import { FilterMenuItem } from "./FilterMenuItem";
import { StatusIncticator } from "./StatusIncticatorOfProduct";
import styles from "./Filter.module.css";
import MobileFilter from "../../components/FilterComponents/MobileFilter";

export const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <StatusIncticator />
      <FilterMenuItem />
    </div>
  );
};
