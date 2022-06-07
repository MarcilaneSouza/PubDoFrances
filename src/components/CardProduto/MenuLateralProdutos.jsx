import { MenuLateral, Navlist, Itemlist, Toggle } from "./StyledProdutos";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";
import { useState } from "react";

const MenuLateralProdutos = () => {
  const [name, setName] = useState();
  const handleclick = (e) => {
    setName(e.target.id);
    e.stopPropagation();
  };

  return (
    <MenuLateral>
      <Navlist>

        <Itemlist active={name == "home"}>
          <Toggle active={name == "home"} htmlFor="tab1">
            <FiHome onClick={(e) => handleclick(e)} id="home" />
          </Toggle>
        </Itemlist>

        <Itemlist active={name == "settings"}>
          <Toggle active={name == "settings"} htmlFor="tab2">
            <FiSettings onClick={(e) => handleclick(e)} id="settings" />
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
