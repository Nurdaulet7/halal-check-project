import styles from "./AdditiviesList.module.css";
import { v4 as uuidv4 } from "uuid";
import { EmptyPage } from "../../utils/EmptyPage";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  selectAdditiviesCodeFilter,
  selectCategoryFilter,
} from "../../redux/slices/filterAdditiviesSlice";
import {
  fetchAdditive,
  selectAdditivies,
  selectIsLoadingAdditiveViaAPI,
} from "../../redux/slices/additiveSlice";
import { useEffect } from "react";
import AdditiveCardLoader from "../../utils/AdditiveCardLoader";
import AdditiveCard from "./AdditiveCard";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";

const AdditiviesList = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  const additiveNameFilter = useSelector(selectAdditiviesCodeFilter);
  const isLoading = useSelector(selectIsLoadingAdditiveViaAPI);
  const additivies = useSelector(selectAdditivies);
  const categoryFilter = useSelector(selectCategoryFilter);

  const handleFetchData = () => {
    dispatch(fetchAdditive("http://localhost:4000/additivies-list-delayed"));
    dispatch(clearError());
  };

  const filteredAdditivies = additivies.filter((additive) => {
    const matchesName = additive.code
      .toLowerCase()
      .includes(additiveNameFilter.toLowerCase());
    const matchesCategory =
      categoryFilter === "" ||
      additive.category.name.toLowerCase() === categoryFilter.toLowerCase();
    return matchesName && matchesCategory;
  });

  useEffect(() => {
    if (additivies.length === 0) {
      handleFetchData();
    }
  }, [dispatch, additivies.length]);

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(
        <AdditiveCardLoader className={styles.loaders} key={uuidv4()} />
      ); // Используйте индекс i в качестве ключа
    }
  }

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.mainContainer}>
      <h2>{categoryFilter === "" ? "Food additivies" : categoryFilter}</h2>
      <hr />
      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading ? (
            loaders
          ) : errorMessage ? (
            <EmptyPage
              isError={true}
              errorMessage={errorMessage}
              fetch={handleFetchData}
            />
          ) : filteredAdditivies.length > 0 ? (
            filteredAdditivies.map((additive) => (
              <AdditiveCard {...additive} key={uuidv4()} />
            ))
          ) : (
            <EmptyPage
              isError={false}
              reset={handleResetFilter}
              title={"additives"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditiviesList;
