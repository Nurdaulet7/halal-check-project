import styles from "./AdditiviesList.module.css";
import { v4 as uuidv4 } from "uuid";
import { TbZoomReset } from "react-icons/tb";
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
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useMediaQuery } from "react-responsive";

const AdditiviesList = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const additiveNameFilter = useSelector(selectAdditiviesCodeFilter);
  const isLoading = useSelector(selectIsLoadingAdditiveViaAPI);
  const additivies = useSelector(selectAdditivies);
  const categoryFilter = useSelector(selectCategoryFilter);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const mobileCategoryText = useMediaQuery({ maxWidth: 500 });

  const handleFetchData = () => {
    dispatch(fetchAdditive("http://localhost:8080/additives/getAll"));
    dispatch(clearError());
  };

  const isAnyFilterActive = () => {
    return additiveNameFilter !== "" || categoryFilter !== "";
  };

  const filteredAdditivies = additivies.filter((additive) => {
    const matchesName = additive.code
      .toLowerCase()
      .includes(additiveNameFilter.toLowerCase());
    const matchesCategory =
      categoryFilter === "" ||
      (additive.ecategory &&
        additive.ecategory.name.toLowerCase() === categoryFilter.toLowerCase()); // Добавляем проверку на additive.ecategory
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
      );
    }
  }

  const handleResetFilter = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listTop}>
        <h2>
          {categoryFilter === ""
            ? "Food additives"
            : capitalizeFirstLetter(categoryFilter)}
        </h2>
        {isAnyFilterActive() && (
          <p onClick={handleResetFilter}>
            {isMobile ? "" : "Reset filters"}
            <TbZoomReset id={styles.resetIcon} />
          </p>
        )}
      </div>
      <hr />
      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading ? (
            loaders
          ) : errorMessage && additivies.length === 0 ? (
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
