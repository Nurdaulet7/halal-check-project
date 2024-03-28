import { useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";

export const ProductCard = () => {
  const sidebarVisible = useSelector(selectsidebarVisible);

  return (
    <div
      className={`${styles.viewsRow} ${
        sidebarVisible ? styles.withoutSidebar : styles.withSidebar
      }`}
    >
      <div className={styles.card}>
        <img src="https://www.bestofcandy.de/images/product_images/original_images/hershey_milk_chocolate.jpg" />
        <div className={styles.cardContent}>
          <div className={styles.cardCenter}>
            <h3>Chocolate “Hersey's”</h3>
            <p>
              <span className={styles.textBold}>Ingredients:</span> sugar, cocoa
              mass, cocoa butter, whey solids, whole..
            </p>
            <hr color="white" margin="5px" />
            <p>
              <span className={styles.textBold}>Barcode:</span> 87585590505
            </p>
          </div>
          <div className={styles.cardBottom}>
            <label>Not certified</label>
            <a href="" className={styles.btn}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
