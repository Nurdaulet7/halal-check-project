import { useDispatch, useSelector } from "react-redux";
import {
  selectAdditiviesCodeFilter,
  setAdditiveNameFilter,
} from "../../redux/slices/filterAdditiviesSlice";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";

export const HeaderEAdditivies = () => {
  const dispatch = useDispatch();
  const additiveCodeFilter = useSelector(selectAdditiviesCodeFilter);
  const navigate = useNavigate();

  const handleAdditiveNameFilterChange = (e) => {
    navigate("/additivies");
    dispatch(setAdditiveNameFilter(e.target.value));
  };

  const placeholder = "e100 (Without the prefix “e”)";

  return (
    <HeaderComponent
      placeholder={placeholder}
      productNameFilter={additiveCodeFilter}
      hasCertifiedFilter={false}
      handleProductNameFilterChange={handleAdditiveNameFilterChange}
      hasFilter
    />
  );
};
