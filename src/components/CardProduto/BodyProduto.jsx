import React from "react";
import {
  BoxProdutos,
  CardProdutos,
  ContainerProdutos,
  DescricaoProduto,
  ImgProduto,
  TituloProdutos,
} from "./StyledProdutos";
import ProdutosCards from "./ProdutosCards";
const BodyProduto = () => {
  return (
    <ContainerProdutos>
      <TituloProdutos>Escolha bebidas</TituloProdutos>

      <BoxProdutos>
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      <ProdutosCards />
      </BoxProdutos>
    </ContainerProdutos>
  );
};

export default BodyProduto;
