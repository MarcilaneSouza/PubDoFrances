import React from "react";
import { ProdutosContainer } from "../../components/CardProduto/StyledProdutos";
const home = "/assets/images/icons/home.svg";
const message = "/assets/images/icons/message.svg";
const setting = "/assets/images/icons/setting.svg";
import MenuLateralProdutos from "../../components/CardProduto/MenuLateralProdutos";
const Produtos = () => {
  return (
    <ProdutosContainer>
      <MenuLateralProdutos />
    </ProdutosContainer>
  );
};

export default Produtos;
