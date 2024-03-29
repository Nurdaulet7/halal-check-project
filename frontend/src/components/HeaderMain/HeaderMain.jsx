import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import styles from "./HeaderMain.module.css";
import engLng from "../../img/UnitedKingdom.png";
import {
  selectProductNameFilter,
  selectOnlyCertifiedFilter,
  setProductNameFilter,
  setOnlyCertified,
} from "../../redux/slices/filterSlice";

export const HeaderMain = () => {
  const dispatch = useDispatch();
  const productNameFilter = useSelector(selectProductNameFilter);
  const onlyCertifiedFilter = useSelector(selectOnlyCertifiedFilter);

  const handleProductNameFilterChange = (e) => {
    dispatch(setProductNameFilter(e.target.value));
  };

  const handleOnlyCertifiedFilterChange = () => {
    dispatch(setOnlyCertified());
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <header className={styles.vertificationHeader}>
      <div className={styles.searchHeader}>
        <h3>
          Welcome to <span className={styles.colortext}>HalalCheck</span>, your
          companion in the world of halal nutrition!
        </h3>
        <form action="">
          <input
            type="text"
            value={productNameFilter}
            onChange={handleProductNameFilterChange}
            placeholder="Search by product name. Ex: Chocolate"
          />
          <span className={styles.checkbox}>
            <Checkbox
              type="checkbox"
              checked={onlyCertifiedFilter}
              onChange={handleOnlyCertifiedFilterChange}
              {...label}
              defaultChecked
              color="success"
            />
            Show only certified products
          </span>
        </form>
        <p className={styles.bottomText}>
          Just start typing the product name into the search bar and select the
          appropriate option from the drop-down list of offers
        </p>
      </div>
      <div className={styles.lngSwitcher}>
        <img src={engLng} alt="lngSwitcher" />
      </div>
    </header>
  );
};
