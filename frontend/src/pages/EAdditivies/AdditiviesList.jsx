import styles from "./AdditiviesList.module.css";
import { v4 as uuidv4 } from "uuid";
import { EmptyPage } from "../../utils/EmptyPage";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  selectAdditiviesCodeFilter,
} from "../../redux/slices/filterAdditiviesSlice";
import {
  fetchAdditive,
  selectAdditivies,
  selectIsLoadingAdditiveViaAPI,
} from "../../redux/slices/additiveSlice";
import { useEffect } from "react";
import MyLoader from "../../utils/MyLoader";
import SingleAdditive from "./AdditiveCard";

const AdditiviesList = () => {
  const dispatch = useDispatch();

  const additiveNameFilter = useSelector(selectAdditiviesCodeFilter);
  const isLoading = useSelector(selectIsLoadingAdditiveViaAPI);
  const additivies = useSelector(selectAdditivies);

  useEffect(() => {
    if (additivies.length === 0) {
      dispatch(fetchAdditive("http://localhost:4000/additivies-list-delayed"));
    }
  }, [dispatch, additivies.length]);

  const filteredAdditivies = additivies.filter((additive) => {
    const matchesName = additive.code
      .toLowerCase()
      .includes(additiveNameFilter.toLowerCase());
    return matchesName;
  });

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(<MyLoader className={styles.loaders} key={i} />); // Используйте индекс i в качестве ключа
    }
  }

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Food additivies</h2>
      <hr />
      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading && loaders}
          {!isLoading && filteredAdditivies.length === 0 && (
            <EmptyPage reset={handleResetFilter} title={"additivies"} />
          )}
          {filteredAdditivies.map((additive) => {
            return <SingleAdditive {...additive} key={uuidv4()} />;
            // return <ProductCard {...product} key={uuidv4()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdditiviesList;
