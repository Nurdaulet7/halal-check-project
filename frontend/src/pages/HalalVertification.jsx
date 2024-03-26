import { Filter } from "../components/FilterComponents/Filter";
import { HeaderMain } from "../components/HeaderMain/HeaderMain";
import { ProductsList } from "../components/MainContent/ProductsList";
import styles from "../styles/HalalVertificationGrid.module.css";

export const HalalVertification = () => {
  return (
    <div className="mainComponents">
      <HeaderMain className={styles.header} />
      <ProductsList className={styles.mainContent} />
      <Filter className={styles.filter} />
    </div>
  );
};
