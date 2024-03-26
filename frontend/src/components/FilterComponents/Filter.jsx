import { FilterMenuItem } from "./FilterMenuItem";
import { StatusIncticator } from "./StatusIncticatorOfProduct";
import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <StatusIncticator />
      <FilterMenuItem />
    </div>
  );
};
