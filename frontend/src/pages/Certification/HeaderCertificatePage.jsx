import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderMain/HeaderComponent";
import {
  selectEnterpriseFilter,
  setEnterpriseNameFilter,
} from "../../redux/slices/filterEnterprise";

export const HeaderCertificatePage = () => {
  const dispatch = useDispatch();
  const enterpriseFilter = useSelector(selectEnterpriseFilter);
  const navigate = useNavigate();

  const handleEnterpriseNameFilterChange = (e) => {
    navigate("/certificate");
    dispatch(setEnterpriseNameFilter(e.target.value));
  };

  const placeholder = "Search by enterprise name";

  return (
    <HeaderComponent
      placeholder={placeholder}
      productNameFilter={enterpriseFilter}
      hasCertifiedFilter={false}
      handleProductNameFilterChange={handleEnterpriseNameFilterChange}
      hasFilter
    />
  );
};
