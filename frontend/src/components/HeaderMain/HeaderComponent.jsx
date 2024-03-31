import Checkbox from "@mui/material/Checkbox";
import styles from "./HeaderMain.module.css";
import engLng from "../../img/UnitedKingdom.png";

export const HeaderComponent = ({
  placeholder,
  productNameFilter,
  handleProductNameFilterChange,
  hasCertifiedFilter,
  onlyCertifiedFilter,
  handleOnlyCertifiedFilterChange,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <header className={styles.vertificationHeader}>
      <div className={styles.searchHeader}>
        <h3>
          <span className={styles.colortext}>HalalCheck</span> is your companion
          in the world of halal nutrition!
        </h3>
        <form action="">
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
      </div>
      <div className={styles.lngSwitcher}>
        <img src={engLng} alt="lngSwitcher" />
      </div>
    </header>
  );
};
