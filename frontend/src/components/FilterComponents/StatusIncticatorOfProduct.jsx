import styles from "./StatusIndicator.module.css";

export const StatusIncticator = () => {
  return (
    <div className={styles.statusColorsContainer}>
      <h3>Colors for indicating the status of products</h3>
      <div className={styles.statusProduct}>
        <label className={`${styles.status} ${styles.halal}`}>Halal</label>
        <label className={`${styles.status} ${styles.doubtful}`}>
          Doubtful
        </label>
        <label className={`${styles.status} ${styles.haram}`}>Haram</label>
      </div>
    </div>
  );
};
