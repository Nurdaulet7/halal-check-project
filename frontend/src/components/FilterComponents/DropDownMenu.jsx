import { FilterMenuItem } from "./FilterMenuItem";

export function DropDownMenu() {
  return (
    <nav>
      <ul>
        <FilterMenuItem
          menuTitle="item1"
          subMenus={["sub-item1", "sub-item2", "sub-item-3"]}
        />
        <FilterMenuItem
          menuTitle="item3"
          subMenus={["sub-item1", "sub-item2"]}
        />
      </ul>
    </nav>
  );
}
