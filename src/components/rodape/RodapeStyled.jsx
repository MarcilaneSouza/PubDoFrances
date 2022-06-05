import styled from "styled-components";

export const RodapeContainer = styled.footer`
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.inside};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const ColunaRodape = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: border-box;

  margin: 2rem auto;
  width: 50%;
  gap: 1rem;

  @media (min-width: 850px) {
    width: 20%;
  }
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

export const NavRodape = styled.ul`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const ItemNav = styled.li``;

export const LinkNav = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.textoSecundario};
  transition: color 0.4s;

  :hover {
    color: ${({ theme }) => theme.botao};
    cursor: pointer;
  }
`;
