import styled from "styled-components";
import { Link } from "react-router-dom";
import { darkMetal, vermelho } from "../../styles";
//criação da navbar
export const Header = styled.header`
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  opacity: 0.7;
  padding-top: 2rem;
  height: 800px;
  width: 100%;

  background-image: url("/assets/images/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
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
  margin: 20px;
  height: 80px;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 30%;
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
  color: #aba499;
  font-size: x-large;
  text-decoration: none;
  margin: 10px 0;
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
export const BoxApresentation = styled.article`
  width: 60%;
  margin-left: 3%;
  box-sizing: border-box;

  position: absolute;
  top: 25rem;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ApresentationDestaque = styled.p`
  color: ${({ theme }) => theme.texto};
  font-size: 3.1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px ${darkMetal}, 3px 3px 5px ${vermelho};
  word-break: break-word;
`;

export const Apresentation = styled.span`
  margin-left: 1.5rem;
  font-size: 2.1rem;
  text-shadow: 4px 4px 4px ${darkMetal};
`;
