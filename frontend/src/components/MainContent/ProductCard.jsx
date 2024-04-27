import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectProductNameFilter } from "../../redux/slices/filterProductsSlice";
import TruncatedText from "../../utils/TruncatedText";
import createSlug from "../../utils/сreateSlug";
import styles from "./ProductCard.module.css";
import { useMediaQuery } from "react-responsive";

export const ProductCard = (props) => {
  const productNameFilter = useSelector(selectProductNameFilter);
  const {
    // id,
    name,
    barcode,
    // ingredients,
    status,
    imageUrl,
    certified,
  } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);
  const isMobile = useMediaQuery({ maxWidth: 460 });
  const placeholderImage = "https://www.svgrepo.com/show/457691/img-box.svg";
  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(createSlug(name));
  };

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
      <div
        className={`${styles.card} ${styles[status.toLowerCase()]}`}
        onClick={isMobile ? handleClick : null}
      >
        <img
          src={!imageUrl ? placeholderImage : imageUrl}
          onError={onImageError}
          alt="product"
        />
        <div className={styles.cardContent}>
          <div className={styles.cardCenter}>
            <h3>
              {
                <TruncatedText
                  text={highlightMatch(name, productNameFilter)}
                  maxLength={18}
                />
              }
            </h3>
            <p id={styles.ingredientText}>
              <span className={styles.textBold}>Ingredients:</span>{" "}
              {
                <TruncatedText
                  text={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet voluptatibus sed ad, aut maiores repellat laborum accusamus quidem quibusdam repellendus, et impedit doloremque aperiam porro praesentium odio magnam ea ducimus delectus, quisquam doloribus cumque. Deleniti minima placeat voluptatibus excepturi illo repellendus natus magni quas, corporis necessitatibus illum, dolorum quod."
                  }
                  maxLength={85}
                />
              }
            </p>
            <hr color="white" margin="5px" />
            <p>
              <span className={styles.textBold}>Barcode: </span>
              {barcode}
            </p>
          </div>
          <div className={styles.cardBottom}>
            {
              <label className={certified ? styles.certified : ""}>
                {certified ? "Certified" : "Not certified"}
              </label>
            }
            {/* {certified && <img src={certifiacates.logo} alt="certificate" />} */}
            <button href="#" className={styles.btn} onClick={handleClick}>
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
