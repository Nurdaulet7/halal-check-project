import styles from "./CertificationList.module.css";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbZoomReset } from "react-icons/tb";
import {
  fetchEnterprise,
  selectEnterprises,
  selectIsLoadingEnterpriseViaAPI,
} from "../../redux/slices/certificateSlice";
import {
  resetFilters,
  selectEnterpriseFilter,
  selectCategoryFilter,
} from "../../redux/slices/filterEnterprise";
import { EmptyPage } from "../../utils/EmptyPage";
import EnterpriseCardLoader from "../../utils/EnterpriseCardLoader";
import EnterpriseCard from "./EnterpriseCard";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useMediaQuery } from "react-responsive";

const CertificationList = () => {
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchEnterprise("https://halalcheck.onrender.com/company/getAll"));
    dispatch(clearError());
  };

  const isAnyFilterActive = () => {
    return enterprisesNameFilter !== "" || companyType !== "";
  };

  const errorMessage = useSelector(selectErrorMessage);
  const enterprisesNameFilter = useSelector(selectEnterpriseFilter);
  const isLoading = useSelector(selectIsLoadingEnterpriseViaAPI);
  const enterprises = useSelector(selectEnterprises);
  const companyType = useSelector(selectCategoryFilter);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const mobileCategoryText = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (enterprises.length === 0) {
      handleFetchData();
    }
  }, [dispatch, enterprises.length]);

  const filteredEnterprises = enterprises.filter((enterprise) => {
    const matchesName = enterprise.brandName
      .toLowerCase()
      .includes(enterprisesNameFilter.toLowerCase());
    const matchesCompanyType =
      companyType === "" ||
      enterprise.typeOfBusiness.toLowerCase() === companyType.toLowerCase();
    return matchesName && matchesCompanyType;
  });

  let loaders = [];
  if (isLoading) {
    for (let i = 0; i < 3; i++) {
      loaders.push(
        <EnterpriseCardLoader className={styles.loaders} key={uuidv4()} />
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
          {companyType === ""
            ? "Certified Enterprises"
            : capitalizeFirstLetter(companyType)}
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
          ) : errorMessage && enterprises.length === 0 ? (
            <EmptyPage
              isError={true}
              errorMessage={errorMessage}
              fetch={handleFetchData}
            />
          ) : filteredEnterprises.length > 0 ? (
            filteredEnterprises.map((enterprise) => (
              <EnterpriseCard key={uuidv4()} {...enterprise} />
            ))
          ) : (
            <EmptyPage
              isError={false}
              reset={handleResetFilter}
              title={"enterprises"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationList;
