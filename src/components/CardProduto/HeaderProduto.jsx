import React from "react";
import { Input } from "../form/FormStyled";
import {
  CabecalhoProdutos,
  ConteudoCabecalho,
  ItemOpcao,
  ListaOpcoes,
  NavProdutos,
  TextoOpcao,
} from "./StyledProdutos";
const HeaderProduto = () => {
  return (
    <CabecalhoProdutos>
      <ConteudoCabecalho>
        <p>
          Teste de Titulo
          <span>
            <br />
            Segunda, 2 de Fev de 2021
          </span>
        </p>
      </ConteudoCabecalho>
      <Input type={"text"} placeholder=" comidas, drinks etc..." />
      <NavProdutos>
        <ListaOpcoes>
          <ItemOpcao>
            <TextoOpcao>Cardápio</TextoOpcao>
          </ItemOpcao>
          
        </ListaOpcoes>
      </NavProdutos>
    </CabecalhoProdutos>
  );
};

export default HeaderProduto;
