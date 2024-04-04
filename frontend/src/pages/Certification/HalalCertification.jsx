import { Outlet } from "react-router-dom";
import { Filter } from "../../components/FilterComponents/Filter";
import { HeaderCertificatePage } from "./HeaderCertificatePage";

export const HalalCertification = () => {
  return (
    <>
      <HeaderCertificatePage />
      <Outlet />
      <Filter />
    </>
  );
};
