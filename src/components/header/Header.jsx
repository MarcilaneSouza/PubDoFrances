import React from "react";
import BoxApresentacao from "../boxApresentação/BoxApresentacao";
import NavBar from "../NavBar/NavBar";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
      <BoxApresentacao />
    </HeaderStyled>
  );
};

export default Header;
