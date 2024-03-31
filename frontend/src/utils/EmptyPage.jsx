import { useDispatch } from "react-redux";
import { MdOutlineSearchOff } from "react-icons/md";
import styles from "../styles/EmptyPage.module.css";

export const EmptyPage = ({ reset, title = "products" }) => {
  return (
    <div className={styles.message}>
      <MdOutlineSearchOff id={styles.icon} />
      <p>
        {`Unfortunately, we have not found any ${title} that match your request.`}
      </p>
      <button onClick={reset}>Reset filters</button>
    </div>
  );
};
