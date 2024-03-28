import { useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";

export const ProductCard = (props) => {
  const {
    name,
    barcode,
    ingredients,
    status,
    img,
    additives,
    certified,
    certifiacates,
  } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);

  return (
    <div
      className={`${styles.viewsRow} ${
        sidebarVisible ? styles.withoutSidebar : styles.withSidebar
      }`}
    >
      <div className={`${styles.card} ${styles[status]}`}>
        <img src={img} />
        <div className={styles.cardContent}>
          <div className={styles.cardCenter}>
            <h3>{name}</h3>
            <p>
              <span className={styles.textBold}>Ingredients:</span>{" "}
              {ingredients.description}
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
            {certified && <img src={certifiacates.logo} alt="" />}
            <a href="" className={styles.btn}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
