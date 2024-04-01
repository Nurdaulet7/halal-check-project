import { Outlet } from "react-router-dom";
import { HeaderMain } from "../HalalVertification/HeaderMain";
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
