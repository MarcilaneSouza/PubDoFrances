import React from "react";
import {
  MenuLateral,
  Navlist,
  Itemlist,
  Toggle,
  ReferenceToggle,
} from "./StyledProdutos";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";

const MenuLateralProdutos = () => {
  return (
    <MenuLateral>
      <Navlist>
        <Itemlist>
          <Toggle htmlFor="tab1">
            <FiHome />
          </Toggle>
        </Itemlist>
        <Itemlist>
          <Toggle htmlFor="tab2">
            <FiSettings />
          </Toggle>
        </Itemlist>
        <Itemlist>
          <Toggle>
            <FiMessageSquare />
          </Toggle>
        </Itemlist>
      </Navlist>
    </MenuLateral>
  );
};

export default MenuLateralProdutos;
