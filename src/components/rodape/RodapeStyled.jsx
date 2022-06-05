import styled from "styled-components";

export const RodapeContainer = styled.footer`
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.inside};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ColunaRodape = styled.aside`
  box-sizing: border-box;
  display: inherit;
  flex-direction: column;
  margin: 1rem auto;
  width: 45%;
  gap: 1rem;
`;

export const TituloRodape = styled.p`
  font-weight: 700;
  margin: 0 auto;
  font-size: 1.6rem;
`;

export const TextoRodape = styled.p`
  font-weight: 300;
  margin: 0 auto;
  color: ${({ theme }) => theme.textoSecundario};
  text-align: left;
`;
