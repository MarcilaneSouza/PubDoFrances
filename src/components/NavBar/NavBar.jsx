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
  Header,
} from "./NavBarstyle";
import LogoImg from "/assets/images/iconePUB.png";

const NavBar = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);
  return (
    <Header>
      <NavbarContainer extendNavbar={activeNavBar}>
        <NavBarInnerContainer>
          <LeftContainer>
            <Logo src={LogoImg}></Logo>
          </LeftContainer>
          <RightContainer>
            <NavBarLinkContainer>
              <NavBarLink to="/">HOME</NavBarLink>
              <NavBarLink to="/drinks">DRINKS</NavBarLink>
              <NavBarLink to="/combos">COMBOS</NavBarLink>
              <NavBarLink to="/petiscos">PETISCOS</NavBarLink>
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
            <NavBarLinkExtended to="/drinks">DRINKS</NavBarLinkExtended>
            <NavBarLinkExtended to="/combos">COMBOS</NavBarLinkExtended>
            <NavBarLinkExtended to="/petiscos">PETISCOS</NavBarLinkExtended>
            <NavBarLinkExtended to="/sobre">SOBRE</NavBarLinkExtended>
          </NavBarExtendContainer>
        )}
      </NavbarContainer>
    </Header>
  );
};

export default NavBar;
