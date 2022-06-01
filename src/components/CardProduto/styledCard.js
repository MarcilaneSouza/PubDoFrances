import styled from "styled-components";

export const Main = styled.main`
margin: 0 auto;
width: 500px;
height: 393px;
border: 2px solid #E0E6E9;
background-color: "#1F1D2B";
`;

export const DivA = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin: 5px 10px auto;
width: 480px;
height: 55px;
`;

export const TituloData = styled.div`
display: flex;
flex-direction: column;
`;

export const H = styled.h1`
font-size: 25px;

`;

export const Span = styled.span`
font-size: 12px;
`;

export const InputPesquisa = styled.input`
width: 164px;
height: 20px;
border-radius: 6px;
color: white;
border: none;
background-color: #ABBBC2;
`;

export const Ul = styled.ul`
display: flex;
flex-direction: row;
text-align:left;
font-size: 13px;
gap: 35px;
margin: 25px auto;
`;

export const Li =styled.li`
text-align: left;
cursor: pointer;
border-color: white;
border-style: solid;
border-width: 0px 0px 0px 0px;
padding-bottom: 13px;
&:hover{
    color:tomato;
    border-bottom: tomato solid 2px;
}
`

export const DivNav = styled.div`
margin: 1px 10px;
width: 480px;
height: 27px;
border-bottom: 1px solid white; 
`;