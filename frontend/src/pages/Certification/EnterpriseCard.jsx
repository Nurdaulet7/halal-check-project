import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuAlertTriangle } from "react-icons/lu";
import React from "react";
import styles from "./EnterpriseCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectEnterpriseFilter } from "../../redux/slices/filterEnterprise";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isDateBeforeToday from "../../utils/isDateBeforeToday";

const EnterpriseCard = (props) => {
  const {
    brand,
    name,
    businessType,
    regNum,
    deadline,
    img,
    slug,
    companyType,
  } = props;
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
            <div className={styles.title}>
              <p>{businessType}</p>
              <h3>{highlightMatch(brand, enterprisesName)}</h3>
            </div>
            <div className={styles.info}>
              <p className={styles.regNum}>{regNum}</p>
              <p>{name}</p>
            </div>
          </div>
          <div className={styles.enterpriseImg}>
            <img src={img} alt="enterprise" />
          </div>
        </div>
        <div className={styles.cardBottom}>
          <div
            className={`${styles.deadline} ${
              isDateBeforeToday(deadline) ? styles.notExpired : styles.expired
            }`}
          >
            {isDateBeforeToday(deadline) ? (
              <IoCheckmarkDoneSharp id={styles.icon} />
            ) : (
              <LuAlertTriangle id={styles.icon} />
            )}
            <p
              className={`${styles.deadline} ${
                isDateBeforeToday(deadline) ? styles.notExpired : styles.expired
              }`}
            >
              {" "}
              {isDateBeforeToday(deadline) ? deadline : "Expired"}
            </p>
          </div>
          <button href="#" className={styles.btn}>
            <Link to={slug} className={styles.enterprisetLink}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCard;
