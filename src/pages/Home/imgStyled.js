import styled from 'styled-components';
import Beer from '../Home/image/clamp_bottle_beer.jpg'
import Vitrola from '../Home/image/toca-discos.png'
import TorreFranca from '../Home/image/torre-eiffel.png'
import Petisco from '../Home/image/batatas.png'
import Acessivel from '../Home/image/acessibilidade.jpg'

export const DivOne = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* border: 1px solid red; */

@media(max-width:934px){
    display: flex;
    flex-direction:column;
}
`;

export const DivText = styled.div`
display: flex;
width: 45rem;
align-items: center;
padding: 0rem 4rem 0rem 4rem;

@media(max-width:934px){
padding: 0rem 10rem 0rem 0rem;
margin:2px;
text-align: center;
}

@media(max-width:638px){
    padding: 0rem 20rem 0rem 0rem;
}

@media(max-width:480px){
    padding: 0rem 30rem 0rem 0rem;
}


`;

export const Beeer = styled.div`
background-image:url(${Beer}); 
background-repeat: no-repeat;
background-color:#1F1D2B;
width: 8rem;
height: 14em;
box-shadow: 0em 0em 2em #EA7C69;
border-radius: 10px 10px 70px 70px;

@media(max-width:934px){
display: none;
margin:0;
padding: 0;
height: 10rem;
width: 10rem;
} 
`;

export const Vitrol = styled.div`
background-image:url(${Vitrola});
background-position-x: -16px ;
background-position-y: 13px;
background-size: 158px;
background-repeat: no-repeat;
background-color:#1F1D2B;
width: 8rem;
height: 14em;
box-shadow: 0em 0em 3em #EA7C69;
border-radius: 10px 10px 70px 70px;

@media(max-width:934px){
    display: none;
}
`;

export const Frances = styled.div`
background-image: url(${TorreFranca});
background-repeat: no-repeat;
background-position-x: -25px ;
background-position-y: 13px;
background-size: 205px;
background-color:#1F1D2B;
width: 8rem;
height: 14em;
box-shadow: 0em 0em 3em #EA7C69;
border-radius: 10px 10px 70px 70px;

@media(max-width:934px){
    display: none;
}
`;

export const Petiscoss = styled.div`
background-image:url(${Petisco});
background-position-x: -15px ;
background-position-y: 22px;
background-size: 168px;
background-repeat: no-repeat;
background-color:#1F1D2B;
width: 8rem;
height: 14em;
box-shadow: 0em 0em 3em #EA7C69;
border-radius: 10px 10px 70px 70px;

@media(max-width:934px){
    display: none;
}
`;

export const Cadeirante = styled.div`
background-image: url(${Acessivel});
background-repeat: no-repeat;
background-position-x: -24px ;
background-position-y: 13px;
background-size: 167px;
background-color:#1F1D2B;
width: 8rem;
height: 14em;
box-shadow: 0em 0em 3em #EA7C69;
border-radius: 10px 10px 70px 70px;

@media(max-width:934px){
    display: none;
}
`;

export const H = styled.h1`
align-self: center;
padding-bottom: 1.5rem;
font-size: 32px;
border-bottom: 1px solid white;
`;

export const P = styled.p`
font-family: bold;
font-size: 20px;
padding: 1rem ;
border:outset 1px grey;
box-shadow: 0em 0em 10px #EA7C69;
border-radius: 10px 10px 30px 10px;

@media(max-width:934px){
font-size: 20px;
}


@media(max-width:634px){
font-size: 16px;
}
`;

