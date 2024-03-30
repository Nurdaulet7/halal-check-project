import { useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import TruncatedText from "../../utils/TruncatedText";
import { selectProductNameFilter } from "../../redux/slices/filterSlice";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const productNameFilter = useSelector(selectProductNameFilter);
  const {
    name,
    barcode,
    ingredients,
    status,
    img,
    certified,
    certifiacates,
    slug,
  } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className={styles.highlight}>
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

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
            <h3>{highlightMatch(name, productNameFilter)}</h3>
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
              <Link to={slug} className={styles.productLink}>
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
