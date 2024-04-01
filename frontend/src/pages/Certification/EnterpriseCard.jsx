import React from "react";
import styles from "./EnterpriseCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectEnterpriseFilter } from "../../redux/slices/filterEnterprise";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EnterpriseCard = (props) => {
  const { brand, name, businessType, regNum, deadline, img } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);
  const enterprisesName = useSelector(selectEnterpriseFilter);

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
      <div className={styles.cardContent}>
        <div className={styles.cardCenter}>
          <div className={styles.enterpriseInfo}>
            <h4>{businessType}</h4>
            <h3>{brand}</h3>
            <p>{regNum}</p>
            <p>{name}</p>
          </div>
          <div className={styles.enterpriseImg}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={styles.cardBottom}>
          <p>{deadline}</p>
          <button href="#" className={styles.btn}>
            <Link className={styles.enterprisetLink}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCard;
