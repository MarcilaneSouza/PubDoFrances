import styled from "styled-components";

export const Sobre = styled.div`
display: flex;

@media (max-width: 1000px){
    flex-direction:column;
    width:100%;
    
}`;

export const I =styled.div`
display: flex;
margin-left:55px;
width:35%;
padding:20px;
flex-direction: column;
text-align:center;
@media(max-width: 1000px){
    padding:0;
    margin:0;
    margin-left:9rem;
    text-align:center;
}
`
export const Text = styled.p`
padding:15px;
font-size:1.3rem;
@media (max-width: 1000px){
    font-size:0.8rem;
}
`;

export const Imagem =styled.img`
width:50%;
margin-left:100px;
padding:3rem;

@media(max-width: 1000px){ margin:0;
width:60%;
padding:0;
margin-left:6rem;
}
`;
