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

const AdditiveInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.additiveSlug;
  const additivies = useSelector(selectAdditivies);
  const additive = additivies.find((additive) => additive.code === slug);
  const isLoading = selectIsLoadingAdditiveViaAPI;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/additivies");
  };

  useEffect(() => {
    if (additivies.length === 0) {
      dispatch(fetchAdditive("http://localhost:4000/additivies-list-delayed"));
    }
  }, [dispatch, additivies.length]);

  // Перенаправление, если добавка не найдена
  if (additivies.length > 0 && !additive) {
    return (
      <div className={styles.additiveNotFound}>
        <h1>Additive Not Found</h1>
        <p>The additive with code {slug} does not exist in our database.</p>
        <button onClick={() => navigate("/additivies")}>Return to List</button>
      </div>
    );
  }

  if (!additive && isLoading) {
    console.log(additive);
    return <div>Loading product details...</div>;
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
          additive.status === "halal"
            ? styles.halal
            : additive.status === "haram"
            ? styles.haram
            : styles.doubtful
        }`}
      >
        {`This additive is ${additive.status}`}
      </div>
      <div className={styles.additiveInfo}>
        <h3>General information</h3>
        <p>{additive.description}</p>
      </div>
    </div>
  );
};

export default AdditiveInfo;
