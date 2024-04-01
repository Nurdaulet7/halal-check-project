import { useDispatch, useSelector } from "react-redux";
import {
  selectAdditiviesCodeFilter,
  setAdditiveNameFilter,
} from "../../redux/slices/filterAdditiviesSlice";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";

export const HeaderCertificatePage = () => {
  const dispatch = useDispatch();
  const additiveCodeFilter = useSelector(selectAdditiviesCodeFilter);
  const navigate = useNavigate();

  const handleAdditiveNameFilterChange = (e) => {
    navigate("/additivies");
    dispatch(setAdditiveNameFilter(e.target.value));
  };

  const placeholder = "Search by company name";

  return (
    <HeaderComponent
      placeholder={placeholder}
      productNameFilter={additiveCodeFilter}
      hasCertifiedFilter={false}
      handleProductNameFilterChange={handleAdditiveNameFilterChange}
    />
  );
};
