import styled from 'styled-components';
import { Link } from "react-router-dom";

//variaveis de estilo

import {
    bodyPadrao,
    bordaPadrao,
    insidePadrao,
    textoLightPadrao,
    textoPadrao,
  } from "../styles/variaveis";

  


//criação da navbar

export const NavbarContainer = styled.nav
`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "60vh" : "80px")};
    background-color: bodyPadrao;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 750px) {
        height: 90px
    }
`;

export const LeftContainer = styled.div
`
flex: 30%;
display: flex;
justify-content: flex-start;
padding-left: 5%;
align-items: center;
background-color: #393C49;


`;

export const Logo = styled.img
`
margin: 20px;
height: 80px
`

export const RightContainer = styled.div
`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    justify-content: center;
    background-color: #393C49;


    @media (max-width: 750px) {
        justify-content: flex-end;
    }
`;

export const NavBarLinkContainer = styled.div
`
    display: flex;
    align-items: center;
`

export const NavBarInnerContainer = styled.div
`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavBarLink = styled(Link)
`
color: #aba499;
font-size: x-large;
font-family: Arial;
text-decoration: none;
margin: 10px 15px;
transition: all 0.2;
cursor: pointer;
&:hover{
    border-bottom: solid 2px #EA7C69;
}


@media (max-width: 750px) {
    display: none
}
  

`;

export const NavBarLinkExtended = styled(Link)
`
color: #aba499;
font-size: x-large;;
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
    color: textoPadrao;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 750px) {
        display: none
    }
`;


export const NavBarExtendContainer = styled.div
`
display: flex;
flex-direction: column;
align-items: center;
background-color: #393C49;
@media (min-width: 750px){
    display: none;
}
`;
