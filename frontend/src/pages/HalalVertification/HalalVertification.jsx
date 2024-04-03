import { Outlet } from "react-router-dom";
import { Filter } from "../../components/FilterComponents/Filter";
import { HeaderMain } from "./HeaderMain";

export const HalalVertification = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <Filter />
    </>
  );
};
