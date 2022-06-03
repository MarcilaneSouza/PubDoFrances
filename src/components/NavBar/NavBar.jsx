import React, { useState } from "react";

// importando partes da NAVBAR
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavBarInnerContainer,
  NavBarExtendContainer,
  NavBarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinksButton,
  NavBarLinkExtended,
} from "./NavBarstyle";
import LogoImg from "/assets/images/iconePUB.png";

const NavBar = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);
  return (
    <NavbarContainer extendNavbar={activeNavBar}>
      <NavBarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavBarLinkContainer>
            <NavBarLink to="/">HOME</NavBarLink>
            <NavBarLink to="/eventos">EVENTOS</NavBarLink>
            <NavBarLink to="/contatos">CONTATOS</NavBarLink>
            <NavBarLink to="/sobre">SOBRE</NavBarLink>
            <OpenLinksButton
              onClick={() => {
                setActiveNavBar((value) => !value);
              }}
            >
              {activeNavBar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavBarLinkContainer>
        </RightContainer>
      </NavBarInnerContainer>
      {activeNavBar && (
        <NavBarExtendContainer>
          <NavBarLinkExtended to="/">HOME</NavBarLinkExtended>
          <NavBarLinkExtended to="/eventos">EVENTOS</NavBarLinkExtended>
          <NavBarLinkExtended to="/contatos">CONTATOS</NavBarLinkExtended>
          <NavBarLinkExtended to="/sobre">SOBRE</NavBarLinkExtended>
        </NavBarExtendContainer>
      )}
    </NavbarContainer>
  );
};

export default NavBar;
