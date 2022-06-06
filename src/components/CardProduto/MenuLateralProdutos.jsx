import React from "react";
import { MenuLateral, Navlist, Itemlist, Icons } from "./StyledProdutos";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";

const MenuLateralProdutos = () => {
  return (
    <MenuLateral>
      <Navlist>
        <Itemlist>
          <Icons>
            <FiHome />
          </Icons>
        </Itemlist>
        <Itemlist>
          <Icons>
            <FiSettings />
          </Icons>
        </Itemlist>
        <Itemlist>
          <Icons>
            <FiMessageSquare />
          </Icons>
        </Itemlist>
      </Navlist>
    </MenuLateral>
  );
};

export default MenuLateralProdutos;
