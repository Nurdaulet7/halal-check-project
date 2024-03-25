import { DropDownMenu } from "../components/FilterComponents/DropDownMenu";
import { StatusIncticator } from "../components/FilterComponents/StatusIncticatorOfProduct";
import { HeaderMain } from "../components/HeaderMain/HeaderMain";

export const HalalVertification = () => {
  return (
    <div className="mainComponents">
      <HeaderMain />
      <StatusIncticator />
      <DropDownMenu />
    </div>
  );
};
