import React from "react";
import { CardProdutos, DescricaoProduto, ImgProduto } from "./StyledProdutos";
import { Borda } from "../container/ContainerStyled";

const ProdutosCards = (props) => {
  const {img, id, embalagem, nome, sabor, preco, ml} = props

  return (
    <CardProdutos>
      <ImgProduto src={img} alt="imagem do produto"
      />
      <Borda />
      <DescricaoProduto>{nome}</DescricaoProduto>
      <DescricaoProduto>{sabor}</DescricaoProduto>
      <DescricaoProduto>{embalagem}</DescricaoProduto>
      <DescricaoProduto secundary>{preco}</DescricaoProduto>
    </CardProdutos>
  );
};

export default ProdutosCards;
