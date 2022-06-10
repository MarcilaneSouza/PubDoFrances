import styled from "styled-components";

export const MenuLateral = styled.aside`
  box-sizing: border-box;
  height: 350px;
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
  width: 100%;
  padding: 0.4rem 0.4rem;
  position: relative;
  left: ${({ right }) => (right ? right : "-3000px")};
  display: ${({ right }) => !right && "none"};
  transition: right ease-in-out 5.6s;
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

  /* border: 2px solid ${({ theme }) => theme.borda}; */
  border-radius: 4px;

  background-color: ${({ theme }) => theme.body};

  display: grid;

  grid-template-columns: 0fr 2fr 0fr;
`;

export const AbaProdutos = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 1rem;
  height: auto;
  position: relative;
`;

export const CabecalhoProdutos = styled.div`
  max-width: 55%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ConteudoCabecalho = styled.article`
  padding: 0.1rem;
  line-height: 1rem;
`;

export const NavProdutos = styled.nav`
  width: 80%;
`;

export const ListaOpcoes = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const ItemOpcao = styled.li`
  font-size: 1.2rem;
`;

export const TextoOpcao = styled.p`
  padding: 0.3rem;

  color: ${({ theme }) => theme.texto};
  border-bottom: 3px solid transparent;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.botao};
    border-bottom: 3px solid ${({ theme }) => theme.botao};
  }
`;

export const ContainerProdutos = styled.div`
  padding: 1rem;
  min-width: 65%;
`;

export const TituloProdutos = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.texto};
`;

export const ImgProduto = styled.img`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  bottom: 50px;
  width: 150px;
  height: 150px;
`;
export const CardProdutos = styled.article`
  border-radius: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 200px;

  padding: 1rem;
  background-color: ${({ theme }) => theme.inside};
`;

export const DescricaoProduto = styled.p`
  font-size: 1rem;
  display: block;
  margin: 5px auto;
  color: ${({ theme, secundary }) =>
    secundary ? theme.textoSecundario : theme.texto};
`;

export const BoxProdutos = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  justify-content: space-evenly;
`;
