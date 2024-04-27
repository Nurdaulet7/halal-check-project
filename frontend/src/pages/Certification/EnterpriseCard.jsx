import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuAlertTriangle } from "react-icons/lu";
import React from "react";
import styles from "./EnterpriseCard.module.css";
import { selectsidebarVisible } from "../../redux/slices/sidebarSlice";
import { selectEnterpriseFilter } from "../../redux/slices/filterEnterprise";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isDateBeforeToday from "../../utils/isDateBeforeToday";
import createSlug from "../../utils/сreateSlug.js";
import formatIsoDateToDmy from "../../utils/formatDate.js";

const EnterpriseCard = (props) => {
  const {
    brandName,
    typeOfBusiness,
    enterpriceName,
    deadlineDate,
    imageUrl,
    companyType,
  } = props;
  const sidebarVisible = useSelector(selectsidebarVisible);
  const enterprisesName = useSelector(selectEnterpriseFilter);
  const placeholderImage = "https://www.svgrepo.com/show/457691/img-box.svg";
  const onImageError = (e) => {
    e.target.src = placeholderImage;
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
      <div className={styles.cardContent}>
        <div className={styles.cardCenter}>
          <div className={styles.enterpriseInfo}>
            <div className={styles.title}>
              <p>{companyType.enterpriceName}</p>
              <h3>{highlightMatch(brandName, enterprisesName)}</h3>
            </div>
            <div className={styles.info}>
              <p>{enterpriceName}</p>
              <p id={styles.category}>{typeOfBusiness}</p>
            </div>
          </div>
          <div className={styles.enterpriseImg}>
            <img
              src={!imageUrl ? placeholderImage : imageUrl}
              onError={onImageError}
              alt="enterprise"
            />
          </div>
        </div>
        <div className={styles.cardBottom}>
          <div
            className={`${styles.deadline} ${
              isDateBeforeToday(formatIsoDateToDmy(deadlineDate))
                ? styles.notExpired
                : styles.expired
            }`}
          >
            {isDateBeforeToday(formatIsoDateToDmy(deadlineDate)) ? (
              <IoCheckmarkDoneSharp id={styles.icon} />
            ) : (
              <LuAlertTriangle id={styles.icon} />
            )}
            <p
              className={`${styles.deadline} ${
                isDateBeforeToday(formatIsoDateToDmy(deadlineDate))
                  ? styles.notExpired
                  : styles.expired
              }`}
            >
              {" "}
              {isDateBeforeToday(formatIsoDateToDmy(deadlineDate))
                ? formatIsoDateToDmy(deadlineDate)
                : "Expired"}
            </p>
          </div>
          <button href="#" className={styles.btn}>
            <Link to={createSlug(brandName)} className={styles.enterprisetLink}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCard;
