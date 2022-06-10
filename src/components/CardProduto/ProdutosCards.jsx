import React from "react";
import { CardProdutos, DescricaoProduto, ImgProduto } from "./StyledProdutos";
import { Borda } from "../container/ContainerStyled";

const ProdutosCards = () => {
  return (
    <CardProdutos>
      <ImgProduto
        src="https://picsum.photos/200/300
"
        alt="imagem do produto"
      />
      <Borda />
      <DescricaoProduto>Cerveja Brahma</DescricaoProduto>
      <DescricaoProduto>Cerveja Brahma</DescricaoProduto>
      <DescricaoProduto>Cerveja Brahma</DescricaoProduto>
      <DescricaoProduto secundary>R$ 30,00</DescricaoProduto>
    </CardProdutos>
  );
};

export default ProdutosCards;
