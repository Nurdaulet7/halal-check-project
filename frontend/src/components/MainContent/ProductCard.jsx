import styles from "./ProductCard.module.css";
import { MdOutlineNotInterested } from "react-icons/md";

export const ProductCard = () => {
  return (
    <div className={styles.viewsRow}>
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
            <label>
              Not certified{" "}
              <MdOutlineNotInterested fontSize="clamp(0.75rem, 0.6286rem + 0.5178vw, 1.25rem)" />
            </label>
            <a href="" className={styles.btn}>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
