import styles from "./AdditiviesList.module.css";
import { EmptyPage } from "../../utils/EmptyPage";
import { useDispatch, useSelector } from "react-redux";
import { selectProductNameFilter } from "../../redux/slices/filterSlice";
import {
  fetchAdditive,
  selectAdditivies,
  selectIsLoadingAdditiveViaAPI,
} from "../../redux/slices/additiveSlice";
import { useEffect } from "react";

const AdditiviesList = () => {
  const dispatch = useDispatch();

  const additiveNameFilter = useSelector(selectProductNameFilter);
  const isLoading = useSelector(selectIsLoadingAdditiveViaAPI);
  const additivies = useSelector(selectAdditivies);

  useEffect(() => {
    if (additivies.length === 0) {
      dispatch(fetchAdditive("http://localhost:4000/additivies-list-delayed"));
    }
  }, [dispatch, additivies.length]);

  const filteredAdditivies = additivies.filter((additive) => {
    const matchesName = additive.name
      .toLowerCase()
      .includes(additiveNameFilter.toLowerCase());

    return matchesName;
  });

  return <p> </p>;
};

export default AdditiviesList;
