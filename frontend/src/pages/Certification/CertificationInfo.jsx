import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchEnterprise,
  selectEnterprises,
} from "../../redux/slices/certificateSlice";
import styles from "./CertificationInfo.module.css";
import isDateBeforeToday from "../../utils/isDateBeforeToday";

const CertificationInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.certificateSlug;
  const enterprises = useSelector(selectEnterprises);
  const enterprise = enterprises.find((enterprise) => enterprise.slug === slug);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/certificate");
  };
  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (enterprises.length === 0) {
      dispatch(
        fetchEnterprise("http://localhost:4000/enterprises-list-delayed")
      );
    }
  }, [dispatch, enterprises.length]);

  if (!enterprise) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className={styles.enterpriseContent}>
      <div className={styles.title}>
        <h1>{enterprise.brand}</h1>
        <p>{enterprise.businessType}</p>
      </div>
      <div
        className={`${styles.status} ${
          isDateBeforeToday(enterprise.deadline)
            ? styles.halal
            : styles.doubtful
        }`}
      >
        {`${
          isDateBeforeToday(enterprise.deadline)
            ? "This enterprise is certified until"
            : "Certificate for this enterprise expired on"
        } ${enterprise.deadline}`}
      </div>
      <div className={styles.companyCard}>
        <div className={styles.companyLogo}>
          <img src={enterprise.img} alt="" />
        </div>
        <div className={styles.companyInfo}>
          <div className={styles.companyFeatures}>
            <div className={styles.companyItem}>
              <p>Enterprise name</p>
              <p>{enterprise.name}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Brand name</p>
              <p>{enterprise.brand}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Type of business</p>
              <p>{enterprise.businessType}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Registration number</p>
              <p>{enterprise.regNum}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Date of receipt</p>
              <p>{enterprise.receipt}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Deadline date</p>
              <p>{enterprise.deadline}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Region</p>
              <p>{enterprise.region}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Ceftifed by</p>
              <p>
                <a target="_blank" href={enterprise.certificate}>
                  {enterprise.certifiedBy}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationInfo;