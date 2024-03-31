import { useDispatch, useSelector } from "react-redux";
import {
  selectProductNameFilter,
  selectOnlyCertifiedFilter,
  setProductNameFilter,
  setOnlyCertified,
} from "../../redux/slices/filterProductsSlice";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";

export const HeaderMain = () => {
  const dispatch = useDispatch();
  const productNameFilter = useSelector(selectProductNameFilter);
  const onlyCertifiedFilter = useSelector(selectOnlyCertifiedFilter);
  const navigate = useNavigate();

  const handleProductNameFilterChange = (e) => {
    navigate("/vertification");
    dispatch(setProductNameFilter(e.target.value));
  };

  const handleOnlyCertifiedFilterChange = () => {
    navigate("/vertification");
    dispatch(setOnlyCertified());
  };

  const placeholder = "Search by product name. Ex: Chocolate";

  return (
    <HeaderComponent
      placeholder={placeholder}
      productNameFilter={productNameFilter}
      handleProductNameFilterChange={handleProductNameFilterChange}
      hasCertifiedFilter={true}
      onlyCertifiedFilter={onlyCertifiedFilter}
      handleOnlyCertifiedFilterChange={handleOnlyCertifiedFilterChange}
    />
  );
};
