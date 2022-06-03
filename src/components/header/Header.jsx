import React from "react";
import { Borda } from "../container/ContainerStyled";
import NavBar from "../NavBar/NavBar";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
      <Borda />
    </HeaderStyled>
  );
};

export default Header;
