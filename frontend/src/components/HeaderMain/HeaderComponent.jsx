import Checkbox from "@mui/material/Checkbox";
import styles from "./HeaderMain.module.css";
import engLng from "../../img/UnitedKingdom.png";
import MobileFilter from "../FilterComponents/MobileFilter";
import { useMediaQuery } from "react-responsive";

export const HeaderComponent = ({
  placeholder,
  productNameFilter,
  handleProductNameFilterChange,
  hasCertifiedFilter,
  onlyCertifiedFilter,
  handleOnlyCertifiedFilterChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <header className={styles.vertificationHeader}>
      <div className={styles.searchHeader}>
        <div className={styles.headerTitle}>
          <h3>
            <span className={styles.colortext}>HalalCheck</span> is your
            companion in the world of halal nutrition!
          </h3>
          <div className={styles.lngSwitcher}>
            <img src={engLng} alt="lngSwitcher" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={productNameFilter} //
            onChange={handleProductNameFilterChange} //
            placeholder={placeholder} //
          />
          {hasCertifiedFilter && (
            <span className={styles.checkbox}>
              <Checkbox
                type="checkbox"
                checked={onlyCertifiedFilter}
                onChange={handleOnlyCertifiedFilterChange}
                {...label}
                color="success"
              />
              Show only certified products
            </span>
          )}
        </form>
        {isMobile && <MobileFilter className={styles.mobileFilter} />}
      </div>
    </header>
  );
};
