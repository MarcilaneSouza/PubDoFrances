import styled from "styled-components";
import { Link } from "react-router-dom";
import { darkMetal, vermelho } from "../../styles";
//criação da navbar

export const NavbarContainer = styled.nav`
  backdrop-filter: blur(4px);

  opacity: 1;
  box-sizing: border-box;
  width: 100%;
  height: ${(extendNavbar) => (extendNavbar ? "auto" : "80px")};
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.borda};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  @media (min-width: 750px) {
    height: 90px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 3%;
  align-items: center;
  background-color: transparent;
`;

export const Logo = styled.img`
  margin: 0 0 20px 20px;
  width: 90px;
  height: 90px;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 35%;
  justify-content: center;
  background-color: transparent;

  @media (max-width: 750px) {
    justify-content: flex-end;
  }
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: ${({ theme }) => theme.textoSecundario};
  font-weight: 700;
  font-size: x-large;
  text-decoration: none;
  margin: 10px 15px;
  transition: all 0.3;
  cursor: pointer;
  text-shadow: 4px 4px 4px ${darkMetal};

  border-bottom: solid 2px transparent;
  &:hover {
    color: ${vermelho};
    border-bottom: solid 2px ${vermelho};
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: ${({ theme }) => theme.textoSecundario};
  font-size: x-large;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    color: ${vermelho};
    border-bottom: solid 2px ${vermelho};
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textoSecundario};
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 750px) {
    display: none;
  }
`;

export const NavBarExtendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  @media (min-width: 750px) {
    display: none;
  }
`;
