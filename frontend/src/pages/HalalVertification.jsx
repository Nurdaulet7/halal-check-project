import { Filter } from "../components/FilterComponents/Filter";
import { HeaderMain } from "../components/HeaderMain/HeaderMain";
import { ProductsList } from "../components/MainContent/ProductsList";
import styles from "../styles/HalalVertificationGrid.module.css";

export const HalalVertification = () => {
  return (
    <>
      <HeaderMain className={styles.header} />
      <ProductsList className={styles.main} />
      <Filter className={styles.filter} />
    </>
  );
};
