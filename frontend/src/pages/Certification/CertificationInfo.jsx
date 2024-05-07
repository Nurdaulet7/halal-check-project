import { IoMdClose } from "react-icons/io";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchEnterprise,
  selectEnterprises,
  selectIsLoadingEnterpriseViaAPI,
} from "../../redux/slices/certificateSlice";
import styles from "./CertificationInfo.module.css";
import isDateBeforeToday from "../../utils/isDateBeforeToday";
import { ThreeDots } from "react-loader-spinner";
import createSlug from "../../utils/сreateSlug";
import formatIsoDateToDmy from "../../utils/formatDate";
import { clearError } from "../../redux/slices/errorSlice";

const CertificationInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.certificateSlug;
  const isLoading = selectIsLoadingEnterpriseViaAPI;
  const enterprises = useSelector(selectEnterprises);
  const placeholderImage = "https://www.svgrepo.com/show/457691/img-box.svg";

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  const handleFetchData = () => {
    dispatch(fetchEnterprise("https://halalcheck.onrender.com/company/getAll"));
    dispatch(clearError());
  };

  const enterprise = enterprises.find(
    (enterprise) => createSlug(enterprise.brandName) === slug
  );
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/certificate");
  };
  useEffect(() => {
    // Загрузка данных о продуктах, только если массив продуктов пуст
    if (enterprises.length === 0) {
      handleFetchData();
    }
  }, [dispatch, enterprises.length]);

  if (!enterprise && isLoading) {
    return (
      <div className={`${styles.enterpriseContent} ${styles.loader}`}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className={styles.enterpriseContent}>
      <div className={styles.title}>
        <div className={styles.enterpriseTop}>
          <h1>{enterprise.brandName}</h1>
          <p>{enterprise.typeOfBusiness}</p>
        </div>
        <button onClick={handleBack}>
          <IoMdClose />
        </button>
      </div>
      <div
        className={`${styles.status} ${
          isDateBeforeToday(formatIsoDateToDmy(enterprise.deadlineDate))
            ? styles.halal
            : styles.doubtful
        }`}
      >
        {`${
          isDateBeforeToday(formatIsoDateToDmy(enterprise.deadlineDate))
            ? "This enterprise is certified until"
            : "Certificate for this enterprise expired on"
        } ${formatIsoDateToDmy(enterprise.deadlineDate)}`}
      </div>
      <div className={styles.companyCard}>
        <div className={styles.companyLogo}>
          <img
            src={!enterprise.imageUrl ? placeholderImage : enterprise.imageUrl}
            onError={onImageError}
            alt="enterprise"
          />
        </div>
        <div className={styles.companyInfo}>
          <div className={styles.companyFeatures}>
            <div className={styles.companyItem}>
              <p>Enterprise name</p>
              <p>{enterprise.enterpriceName}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Brand name</p>
              <p>{enterprise.brandName}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Type of business</p>
              <p>{enterprise.typeOfBusiness}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Controller</p>
              <p>{enterprise.controller}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Date of receipt</p>
              <p>{formatIsoDateToDmy(enterprise.dateOfReceipt)}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Deadline date</p>
              <p>{formatIsoDateToDmy(enterprise.deadlineDate)}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Region</p>
              <p>{enterprise.region}</p>
            </div>
            <div className={styles.companyItem}>
              <p>Ceftifed by</p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={enterprise.certificateUrl}
                >
                  {enterprise.certifiedBy}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.companyMap}>
        <MapContainer
          center={[
            !enterprise.lat || enterprise.lat === ""
              ? 43.24230376033211
              : enterprise.lat,
            !enterprise.lng || enterprise.lng === ""
              ? 76.89870830666096
              : enterprise.lng,
          ]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              !enterprise.lat || enterprise.lat === ""
                ? 43.24230376033211
                : enterprise.lat,
              !enterprise.lng || enterprise.lng === ""
                ? 76.89870830666096
                : enterprise.lng,
            ]}
          >
            <Popup>
              <h2 className={styles.mapTitle}>{enterprise.brandName}</h2>
              <h3>{enterprise.typeOfBusiness}</h3>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CertificationInfo;
