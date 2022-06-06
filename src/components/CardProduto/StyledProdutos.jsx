import styled from "styled-components";

export const ProdutosContainer = styled.div`
  box-sizing: border-box;

  margin: 1rem auto;

  width: 95%;

  border: 2px solid ${({ theme }) => theme.borda};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.body};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const MenuLateral = styled.aside`
  box-sizing: border-box;

  border-radius: 4px;

  box-sizing: inherit;
  width: min-content;
  background-color: ${({ theme }) => theme.inside};
`;

export const Navlist = styled.ul`
  box-sizing: border-box;
  border-radius: inherit;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 5px 0rem 5px 5px;
`;

export const Icons = styled.p`
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.botao};
  border-radius: 8px;
`;

export const Itemlist = styled.li`
  box-sizing: border-box;
  border-radius: 8px 0 0 8px;

  color: ${({ theme }) => theme.texto};
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  :hover {
    background-color: ${({ theme }) => theme.body};
  }
  &:hover ${Icons} {
    color: ${({ theme }) => theme.texto};

    background-color: ${({ theme }) => theme.botao};
  }
`;
