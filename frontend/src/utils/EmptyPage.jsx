import { useDispatch } from "react-redux";
import { MdOutlineSearchOff } from "react-icons/md";
import { resetFilters } from "../redux/slices/filterSlice";
import styles from "../styles/EmptyPage.module.css";

export const EmptyPage = () => {
  const dispatch = useDispatch();

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };
  return (
    <div className={styles.message}>
      <MdOutlineSearchOff id={styles.icon} />
      <p>
        Unfortunately, we have not found any products that match your request.
      </p>
      <button onClick={handleResetFilter}>Reset filters</button>
    </div>
  );
};
