import { IoMdClose } from "react-icons/io";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectAdditivies,
  fetchAdditive,
  selectIsLoadingAdditiveViaAPI,
} from "../../redux/slices/additiveSlice";
import styles from "./AdditiveInfo.module.css";
import { ThreeDots } from "react-loader-spinner";

// import { NotFound } from "../../components/NotFound/NotFound";

const AdditiveInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.additiveSlug;
  const additivies = useSelector(selectAdditivies);
  const additive = additivies.find(
    (additive) => additive.code.toLocaleLowerCase() === slug.toLocaleLowerCase()
  );
  const isLoading = selectIsLoadingAdditiveViaAPI;
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate("/additives");
    navigate(-1);
  };

  useEffect(() => {
    if (additivies.length === 0) {
      dispatch(
        fetchAdditive("https://halalcheck.onrender.com/additives/getAll")
      );
    }
  }, [dispatch, additivies.length]);

  // Перенаправление, если добавка не найдена
  if (additivies.length > 0 && !additive) {
    return (
      <div className={styles.additiveContent}>
        <div className={styles.additiveHeader}>
          <div className={styles.additiveTitle}>
            <h1>Not Found</h1>
            <span className={styles.additiveName}>
              Sorry, we couldn't find the additive you're looking for in our
              database.
            </span>
          </div>
          <button onClick={handleBack}>
            <IoMdClose />
          </button>
        </div>
        <div className={`${styles.status} ${styles.doubtful}`}></div>
      </div>
    );
  }

  if (!additive && isLoading) {
    console.log(additive);
    return (
      <div className={`${styles.additiveContent} ${styles.loader}`}>
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
    <div className={styles.additiveContent}>
      <div className={styles.additiveHeader}>
        <div className={styles.additiveTitle}>
          <h1>{additive.code}</h1>
          <span className={styles.additiveName}>{additive.name}</span>
        </div>
        <button onClick={handleBack}>
          <IoMdClose />
        </button>
      </div>
      <div
        className={`${styles.status} ${
          additive.status.toLocaleLowerCase() === "halal"
            ? styles.halal
            : additive.status.toLocaleLowerCase() === "haram"
            ? styles.haram
            : styles.doubtful
        }`}
      >
        {`This additive is ${additive.status}`}
      </div>
      {additive.status.toLocaleLowerCase() === "doubtful" && (
        <div className={styles.doubtfulInfo}>
          <p>
            <span className={styles.halalIf}>Halal, </span> {additive.halalIf}
          </p>
          <p>
            <span className={styles.haramIf}>Haram, </span> {additive.haramIf}
          </p>
        </div>
      )}
      <div className={styles.additiveInfo}>
        <h3>General information</h3>
        <p>{additive.description}</p>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Influence on the body</h3>
        {additive.status.toLocaleLowerCase() !== "haram" && (
          <div className={`${styles.benefit} ${styles.influenceOnBodyType}`}>
            <h4>Benefit</h4>
            <p>
              {additive.benefit === "" || !additive.benefit
                ? `The ${additive.code} supplement has no beneficial effects on the body.`
                : additive.benefit}
            </p>
          </div>
        )}
        <div className={`${styles.harm} ${styles.influenceOnBodyType}`}>
          <h4>Harm</h4>
          <p>
            {additive.harm === "" || !additive.harm
              ? `The ${additive.code} supplement has no harmful effects on the body.`
              : additive.harm}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditiveInfo;
