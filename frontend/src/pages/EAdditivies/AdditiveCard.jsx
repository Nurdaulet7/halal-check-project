import React from "react";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectAdditiviesCodeFilter } from "../../redux/slices/filterAdditiviesSlice";
import { useSelector } from "react-redux";
import styles from "./AdditiveCard.module.css";
import TruncatedText from "../../utils/TruncatedText";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const AdditiveCard = (props) => {
  const { code, name, status, description } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);
  const additiveCode = useSelector(selectAdditiviesCodeFilter);
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(code);
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
      onClick={isMobile ? handleClick : null}
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
          <button href="#" className={styles.btn} onClick={handleClick}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditiveCard;
