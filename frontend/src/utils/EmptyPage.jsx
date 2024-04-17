import { MdOutlineSearchOff } from "react-icons/md";
import { PiWifiXBold } from "react-icons/pi";
import styles from "../styles/EmptyPage.module.css";

export const EmptyPage = ({
  isError = false,
  fetch,
  errorMessage,
  reset,
  title = "products",
}) => {
  return (
    <div className={styles.message}>
      {!isError ? (
        <>
          <MdOutlineSearchOff id={styles.icon} />
          <p>
            {`Unfortunately, we have not found any ${title} that match your request.`}
          </p>
          <button onClick={reset}>Reset filters</button>
        </>
      ) : (
        <div className={styles.errorMessage}>
          <PiWifiXBold id={styles.icon} />
          <p>{errorMessage}</p>
          <button onClick={fetch}>Try again</button>
        </div>
      )}
    </div>
  );
};
