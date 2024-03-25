import Checkbox from "@mui/material/Checkbox";
import styles from "./HeaderMain.module.css";
import engLng from "../../img/UnitedKingdom.png";

export const HeaderMain = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <header className={styles.vertificationHeader}>
      <div className={styles.searchHeader}>
        <h3>
          Welcome to <span className={styles.colortext}>HalalCheck</span>, your
          companion in the world of halal nutrition!
        </h3>
        <form action="">
          <input type="text" placeholder="What are you looking for?" />
          <span className={styles.checkbox}>
            <Checkbox {...label} defaultChecked color="success" />
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
