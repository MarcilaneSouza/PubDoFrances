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
  width: 100%;
  padding: 0.4rem 0.4rem;
  position: absolute;
  left: ${({ right }) => (right ? right : "-500px")};
  transition: all ease-in-out 0.3s;
`;

export const Toggle = styled.label`
  font-size: 1.2rem;
  text-align: end;

  padding: 0.3rem 0.3rem 0 0.3rem;
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.text : theme.botao)};
  background-color: ${({ theme, active }) => active == true && theme.botao};
  border-radius: 5px;
  transition: all ease-out 0.1s;
`;

export const Itemlist = styled.li`
  box-sizing: border-box;
  border-radius: 8px 0 0 8px;

  color: ${({ theme }) => theme.texto};

  padding: 0.5rem 0.5rem;

  background-color: ${({ theme, active }) => active == true && theme.body};
  transition: all 0.5s;
  &:hover ${Toggle} {
    cursor: pointer;
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

export const AbaProdutos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const cabecalhoProdutos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ConteudoCabecalho = styled.article`
  display: flex;
  gap: 4rem;
  padding: 0.1rem;
  justify-content: space-between;
  width: 100%;
  padding-left: 6rem;
`;
