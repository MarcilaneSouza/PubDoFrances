import styled from "styled-components";
import { Link } from "react-router-dom";
import { vermelho } from "../../styles";
//criação da navbar
const imagePub = "src/assets/images/background.jpg";
export const Header = styled.header`
  box-sizing: border-box;
  padding-top: 3rem;

  height: 800px;
  width: 100%;

  background-image: url(${imagePub});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const NavbarContainer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "50vh" : "80px")};
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
  padding-left: 5%;
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
  padding-left: 5%;
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
  font-size: x-large;
  font-family: Arial;
  text-decoration: none;
  margin: 10px 15px;
  transition: all 0.3;
  cursor: pointer;
  border-bottom: solid 2px transparent;
  &:hover {
    border-bottom: solid 2px ${vermelho};
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  color: #aba499;
  font-size: x-large;
  font-family: Arial;
  text-decoration: none;
  margin: 10px;
  padding: 10px 0px;
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
