import { useDispatch, useSelector } from "react-redux";
import {
  selectProductNameFilter,
  selectOnlyCertifiedFilter,
  setProductNameFilter,
  setOnlyCertified,
} from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";

export const HeaderEAdditivies = () => {
  const dispatch = useDispatch();
  const productNameFilter = useSelector(selectProductNameFilter);
  const onlyCertifiedFilter = useSelector(selectOnlyCertifiedFilter);
  const navigate = useNavigate();

  const handleProductNameFilterChange = (e) => {
    navigate("/additivies");
    dispatch(setProductNameFilter(e.target.value));
  };

  const handleOnlyCertifiedFilterChange = () => {
    navigate("/additivies");
    dispatch(setOnlyCertified());
  };

  const placeholder = "100 (Without the prefix “E”)";

  return (
    <HeaderComponent
    //   placeholder={placeholder}
    //   productNameFilter={productNameFilter}
    //   handleProductNameFilterChange={handleProductNameFilterChange}
    //   hasCertifiedFilter={true}
    //   onlyCertifiedFilter={onlyCertifiedFilter}
    //   handleOnlyCertifiedFilterChange={handleOnlyCertifiedFilterChange}
    />
  );
};
