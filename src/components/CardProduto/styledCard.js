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
margin: 3px 8px;
gap:40px;
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
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
text-align: center;
margin: 30px 0px;
width: 140px;
height: 165px;
background-color:#1F1D2B;
border-radius: 8px;
/* border: solid 1px green; */
`;

export const DivNav = styled.div`
margin: 1px 10px;
width: 500px;
height: 27px;
border-bottom: 1px solid white; 
`;

export const H = styled.h1`
font-size: ${(props) => props.primary ? "20px" : "25px"};
margin: ${(props) => props.primary ? "13px 10px" : ""} ;
/* border: 1px solid yellow; */
`;

export const Descricao = styled.p`
font-size: 14px;
margin: 70px 15px 15px 20px;
`;

export const Valor = styled.p`
font-size: 11px;
margin: 0px 10px 0px 10px;
`;

export const Img = styled.img`
width: 95px;
height: 95px;
margin: 0px 22px 120px;
border-radius: 50%;
border: 1px solid blue;
position: absolute;
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
`;



