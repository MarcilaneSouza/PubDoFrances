import styled from "styled-components";

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

export const ContainerSlide = styled.div`
  position: relative;
  overflow: hidden;
`;
export const Slide = styled.div`
  display: ${({ display }) => display && display};

  padding: 0 0.4rem;
  position: absolute;
  left: ${({ right }) => (right ? right : "-500px")};
  transition: all ease-in-out 0.8s;
`;

export const Toggle = styled.label`
  font-size: 1rem;
  text-align: end;

  padding: 0.1rem 0.3rem 0 0.3rem;
  text-align: center;
  color: ${({ theme }) => theme.botao};
  border-radius: 5px;
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

  &:hover ${Toggle} {
    cursor: pointer;
    color: ${({ theme }) => theme.texto};

    background-color: ${({ theme }) => theme.botao};
  }
`;

export const ReferenceToggle = styled.input`
  display: none;
`;

export const ProdutosContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  margin: 1rem auto;

  width: 95%;

  border: 2px solid ${({ theme }) => theme.borda};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.body};

  display: grid;
  grid-template-columns: 0fr 2fr 0fr;
`;
