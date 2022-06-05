import styled from "styled-components";
import { darkMetal, vermelho } from "../../styles";

export const H = styled.h1`
  text-align: center;
  font-size: 2rem;

  text-shadow: 4px 4px 4px ${darkMetal};
  font-weight: 700;
`;

export const Icons = styled.a`
  font-size: 57px;
  margin: 0 2rem;
`;
export const Dicon = styled.div`
  display: flex;

  margin: 2rem auto;
`;

export const I = styled.a`
  font-size: 57px;
  margin-left: 20px;
`;

export const C = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  background-color: rgb(31, 29, 43);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 35px;
  box-shadow: black 8px 8px;

  width: 350px;
  height: 370px;
`;
export const DivCard = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const N = styled.h2`
  box-sizing: border-box;
  color: ${({ theme }) => theme.textoSecundario};
  text-align: center;
  font-size: 30px;
  padding: 15px;
  text-shadow: 2px 2px 4px ${darkMetal}, 3px 3px 5px ${vermelho};
`;

export const Imagem = styled.img`
  width: 175px;
  justify-content: center;

  border-radius: 80px 80px 80px 80px;
`;
