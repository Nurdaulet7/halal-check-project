import { Outlet } from "react-router-dom";
import { Filter } from "../../components/FilterComponents/Filter";
import { HeaderMain } from "./HeaderMain";
import styles from "../../styles/HalalVertificationGrid.module.css";

export const HalalVertification = () => {
  return (
    <>
      <HeaderMain className={styles.header} />
      <Outlet />
      <Filter />
    </>
  );
};
