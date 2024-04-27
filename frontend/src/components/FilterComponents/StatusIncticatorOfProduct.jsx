import styles from "./StatusIndicator.module.css";

export const StatusIncticator = ({ enterprisePage = false, type }) => {
  return (
    <div className={styles.statusColorsContainer}>
      <h3>{`Colors for indicating the status of ${type}`}</h3>
      <div className={styles.statusProduct}>
        {enterprisePage ? (
          <>
            <label className={`${styles.statusCompany} ${styles.halal}`}>
              Not expired
            </label>
            <label className={`${styles.statusCompany} ${styles.doubtful}`}>
              Expired
            </label>
          </>
        ) : (
          <>
            <label className={`${styles.status} ${styles.halal}`}>Halal</label>
            <label className={`${styles.status} ${styles.doubtful}`}>
              Doubtful
            </label>
            <label className={`${styles.status} ${styles.haram}`}>Haram</label>
          </>
        )}
      </div>
    </div>
  );
};
