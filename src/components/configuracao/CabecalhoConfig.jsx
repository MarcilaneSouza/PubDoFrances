import React from "react";
import {
  CabecalhoProdutos,
  ConteudoCabecalho,
  ItemOpcao,
  ListaOpcoes,
  NavProdutos,
  TextoOpcao,
} from "../CardProduto/StyledProdutos";
const CabecalhoConfig = () => {
  return (
    <CabecalhoProdutos>
      <ConteudoCabecalho>
        <p>Configurações</p>
      </ConteudoCabecalho>
      <NavProdutos>
        <ListaOpcoes>
          <ItemOpcao>
            <TextoOpcao>Incluir item</TextoOpcao>
          </ItemOpcao>
          <ItemOpcao>
            <TextoOpcao>Deletar item</TextoOpcao>
          </ItemOpcao>
          <ItemOpcao>
            <TextoOpcao>Alterar item</TextoOpcao>
          </ItemOpcao>
        </ListaOpcoes>
      </NavProdutos>
    </CabecalhoProdutos>
  );
};

export default CabecalhoConfig;
