import { GiHamburgerMenu } from "react-icons/gi";
import Checkbox from "@mui/material/Checkbox";
import styles from "./HeaderMain.module.css";
import MobileFilter from "../FilterComponents/MobileFilter";
import { useMediaQuery } from "react-responsive";
import { setMobileSidebar } from "../../redux/slices/sidebarSlice";
import { useDispatch } from "react-redux";

export const HeaderComponent = ({
  placeholder,
  productNameFilter,
  handleProductNameFilterChange,
  hasCertifiedFilter,
  onlyCertifiedFilter,
  handleOnlyCertifiedFilterChange,
  hasFilter = false,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMenuVisible = useMediaQuery({ maxWidth: 960 });

  const mobileToggle = () => {
    dispatch(setMobileSidebar());
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <header className={styles.vertificationHeader}>
      <div className={styles.searchHeader}>
        <div className={styles.headerTitle}>
          {isMobile && (
            <div className={styles.logo}>
              <svg
                width="47"
                height="43"
                viewBox="0 0 47 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7609 42.5943C18.8096 42.5943 16.0665 42.0648 13.5318 41.0057C10.9971 39.9467 8.7922 38.4797 6.9172 36.6047C5.0422 34.7297 3.57518 32.5248 2.51615 29.9901C1.45713 27.4554 0.927612 24.7123 0.927612 21.7609C0.927612 18.8443 1.45713 16.1186 2.51615 13.5839C3.57518 11.0491 5.0422 8.84428 6.9172 6.96928C8.7922 5.09428 10.9971 3.61858 13.5318 2.5422C16.0665 1.46581 18.8096 0.927612 21.7609 0.927612C24.3651 0.927612 26.7957 1.34428 29.0526 2.17761C31.3096 3.01095 33.3408 4.15678 35.1464 5.61511L32.9068 7.8547C31.379 6.63942 29.6776 5.70192 27.8026 5.0422C25.9276 4.38247 23.9137 4.05261 21.7609 4.05261C16.7262 4.05261 12.5162 5.74532 9.13074 9.13074C5.74532 12.5162 4.05261 16.7262 4.05261 21.7609C4.05261 26.7957 5.74532 31.0057 9.13074 34.3912C12.5162 37.7766 16.7262 39.4693 21.7609 39.4693C23.0457 39.4693 24.287 39.3478 25.4849 39.1047C26.6828 38.8616 27.8373 38.4971 28.9484 38.011L31.2922 40.4068C29.8686 41.1012 28.3582 41.6394 26.7609 42.0214C25.1637 42.4033 23.4971 42.5943 21.7609 42.5943ZM36.8651 37.9068V31.6568H30.6151V28.5318H36.8651V22.2818H39.9901V28.5318H46.2401V31.6568H39.9901V37.9068H36.8651ZM18.688 31.2401L10.0943 22.5943L12.438 20.2505L18.688 26.5005L40.2505 4.93803L42.6464 7.28178L18.688 31.2401Z"
                  // fill={darkMode ? "#2a8f5c" : "#47B859"}
                  fill={"#47B859"}
                />
              </svg>
              <span className={styles.colortext}>HalalCheck</span>
            </div>
          )}
          <h3 id={styles.titleH}>
            <span className={styles.colortext}>HalalCheck</span> is your
            companion in the world of halal nutrition!
          </h3>

          {isMenuVisible && (
            <button className={styles.mobileMenu} onClick={mobileToggle}>
              <GiHamburgerMenu id={styles.mobileIcon} />
              {/* <img src={engLng} alt="lngSwitcher" /> */}
            </button>
          )}
        </div>
        {hasFilter && (
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
        )}

        {isMobile && <MobileFilter className={styles.mobileFilter} />}
      </div>
    </header>
  );
};
