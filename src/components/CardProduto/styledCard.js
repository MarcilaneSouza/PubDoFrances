import styled from "styled-components";

export const Header = styled.header`
margin: 0 auto;
width: 520px;
height: 393px;
border: 2px solid tomato;
background-color: "#1F1D2B";
`;

export const Body = styled.body`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin: 3px 10px;
gap:97px;
/* border: 1px solid red;  */
`;

export const DivA = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin: 5px 10px auto;
width: 500px;
height: 55px;
`;

export const TituloData = styled.div`
display: flex;
flex-direction: column;
`;

export const DivMenu = styled.div`
border: solid 1px green;
margin: 30px 0px;
width: 100px;
height: 126px;

background-color:#1F1D2B;
border-radius: 8px;
`;

export const H = styled.h1`
font-size: ${(props) => props.primary ? "20px" : "25px"};
margin: ${(props) => props.primary ? "0px 10px" : ""} ;
/* border: 1px solid yellow; */


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
width: 500px;
height: 27px;
border-bottom: 1px solid white; 
`;