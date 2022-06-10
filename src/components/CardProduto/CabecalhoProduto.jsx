import React from "react";



const CabecalhoProduto = () => {
  return (
    <cabecalhoProdutos>
      <ConteudoCabecalho>
        <p>
          Teste de Titulo
          <span>
            <p></p>Segunda, 2 de Fev de 2021
          </span>
        </p>
        <Input type={"text"} placeholder=" comidas, drinks etc..." />
      </ConteudoCabecalho>
      <NavProdutos>
        <ListaOpcoes>
          <ItemOpcao>
            <TextoOpcao>Bebidas</TextoOpcao>
          </ItemOpcao>
        </ListaOpcoes>
      </NavProdutos>
    </cabecalhoProdutos>
  );
};

export default CabecalhoProduto;
