import { Outlet } from "react-router-dom";
import { Filter } from "../../components/FilterComponents/Filter";
import { HeaderEAdditivies } from "./HeaderEAdditivies";

export const EAdditivies = () => {
  return (
    <>
      <HeaderEAdditivies />
      <Outlet />
      <Filter />
    </>
  );
};
