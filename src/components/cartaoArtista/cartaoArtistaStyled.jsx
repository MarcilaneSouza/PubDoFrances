import styled from "styled-components";

export const CardArtista = styled.li`
  background-color: ${({ theme }) => theme.inside};
  box-sizing: border-box;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: all 0.8s;

  border-top: 2px solid ${({ theme }) => theme.borda};
  border-bottom: 2px solid ${({ theme }) => theme.borda};

  border-radius: 0 10px 0 10px;

  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.botao};
    border-top: 2px solid ${({ theme }) => theme.botao};
  }
`;

export const TituloArtista = styled.h3`
  font-weight: 700;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.texto};
  padding: 0.4rem 0;
`;

export const ImgArtista = styled.img`
  height: 250px;
  width: 280px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 2px 2px ${({ theme }) => theme.borda};
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px ${({ theme }) => theme.botao};
  }
`;

export const DataApresentacao = styled.p`
  font: 1.1rem;
  padding: 0.3rem 0;
  font-weight: 300;

  color: ${({ theme }) => theme.textoSecundario};
`;
