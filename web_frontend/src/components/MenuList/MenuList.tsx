import React from "react";

import { MenuContainer, Menu } from "./MenuList.style";
import { MenuListState } from "./MenuList.interface";

const MenuList = ({ list }: { list: MenuListState }) => {
  return (
    <MenuContainer>
      {list.map((item) => (
        <Menu key={item.key}>{item.label}</Menu>
      ))}
    </MenuContainer>
  );
};

export default MenuList;
