import { MenuLateral, Navlist, Itemlist, Toggle } from "./StyledProdutos";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";

const MenuLateralProdutos = ({ name }) => {
  return (
    <MenuLateral>
      <Navlist>
        <Itemlist active={name == "tab1"}>
          <Toggle active={name == "tab1"} htmlFor="tab1">
            <FiHome />
          </Toggle>
        </Itemlist>
        <Itemlist active={name == "tab2"}>
          <Toggle active={name == "tab2"} htmlFor="tab2">
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
