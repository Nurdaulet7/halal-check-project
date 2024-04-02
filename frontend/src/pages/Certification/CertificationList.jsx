import axios from "axios";
import styles from "./CertificationList.module.css";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEnterprise,
  selectEnterprises,
  selectIsLoadingEnterpriseViaAPI,
} from "../../redux/slices/certificateSlice";
import {
  resetFilters,
  selectEnterpriseFilter,
} from "../../redux/slices/filterEnterprise";
import { EmptyPage } from "../../utils/EmptyPage";
import EnterpriseCardLoader from "../../utils/EnterpriseCardLoader";
import EnterpriseCard from "./EnterpriseCard";

const CertificationList = () => {
  const dispatch = useDispatch();

  const enterprisesNameFilter = useSelector(selectEnterpriseFilter);
  const isLoading = useSelector(selectIsLoadingEnterpriseViaAPI);
  const enterprises = useSelector(selectEnterprises);

  useEffect(() => {
    if (enterprises.length === 0) {
      dispatch(
        fetchEnterprise("http://localhost:4000/enterprises-list-delayed")
      );
    }
  }, [dispatch, enterprises.length]);

  const filteredEnterprises = enterprises.filter((enterprise) => {
    const matchesName = enterprise.name
      .toLowerCase()
      .includes(enterprisesNameFilter.toLowerCase());
    return matchesName;
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
      <h2>Public catering</h2>
      <hr />
      <div className={styles.viewContent}>
        <div className={styles.container}>
          {isLoading && loaders}
          {!isLoading && filteredEnterprises.length === 0 && (
            <EmptyPage reset={handleResetFilter} title={"additivies"} />
          )}
          {filteredEnterprises.map((enterprise) => {
            return <EnterpriseCard {...enterprise} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificationList;
