import React from "react";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectAdditiviesCodeFilter } from "../../redux/slices/filterAdditiviesSlice";
import { useSelector } from "react-redux";
import styles from "./AdditiveCard.module.css";
import TruncatedText from "../../utils/TruncatedText";
import { Link } from "react-router-dom";

const AdditiveCard = (props) => {
  const { code, name, status, description } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);
  const additiveCode = useSelector(selectAdditiviesCodeFilter);

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
        <div className={styles.cardContent}>
          <div className={styles.additiveCode}>
            <h3>{highlightMatch(code, additiveCode)}</h3>
          </div>
          <div className={styles.additiveInfo}>
            <h4>{<TruncatedText text={name} maxLength={25} />}</h4>
            <p>{<TruncatedText text={description} maxLength={120} />}</p>
          </div>
        </div>
        <div className={styles.cardBottom}>
          <button href="#" className={styles.btn}>
            <Link to={code} className={styles.productLink}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditiveCard;
