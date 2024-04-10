import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import styles from "./BarcodeScanner.module.css";

export const BarcodeScanner = () => {
  return (
    <>
      <HeaderComponent hasFilter={false} />
      <div className={styles.mainContainer}>BarcodeScanner</div>
    </>
  );
};
