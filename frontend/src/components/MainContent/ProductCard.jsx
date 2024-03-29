import { useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import TruncatedText from "../../utils/TruncatedText";

export const ProductCard = (props) => {
  const { name, barcode, ingredients, status, img, certified, certifiacates } =
    props;
  const sidebarVisible = useSelector(selectsidebarVisible);

  return (
    <div
      className={`${styles.viewsRow} ${
        sidebarVisible ? styles.withoutSidebar : styles.withSidebar
      }`}
    >
      <div className={`${styles.card} ${styles[status]}`}>
        <img src={img} alt="product" />
        <div className={styles.cardContent}>
          <div className={styles.cardCenter}>
            <h3>{name}</h3>
            <p>
              <span className={styles.textBold}>Ingredients:</span>{" "}
              {<TruncatedText text={ingredients.description} maxLength={85} />}
            </p>
            <hr color="white" margin="5px" />
            <p>
              <span className={styles.textBold}>Barcode: </span>
              {barcode}
            </p>
          </div>
          <div className={styles.cardBottom}>
            <label className={certified ? styles.certified : ""}>
              {certified ? "Certified" : "Not certified"}
            </label>
            {certified && <img src={certifiacates.logo} alt="certificate" />}
            <button href="#" className={styles.btn}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
