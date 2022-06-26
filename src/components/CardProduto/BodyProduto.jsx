import React, { useEffect, useState } from "react";
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
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    fetch("https://pubdofrances.herokuapp.com/bebidas")
      .then((res) => res.json())
      .then((res) => setBebidas(res.bebidas));
  });

  useEffect(() => {
    fetch("https://pubdofrances.herokuapp.com/bebidas")
      .then((res) => res.json())
      .then((res) => setBebidas(res.bebidas));
  });

  useEffect(() => {
    fetch("https://pubdofrances.herokuapp.com/bebidas")
      .then((res) => res.json())
      .then((res) => setBebidas(res.bebidas));
  });

  return (
    <ContainerProdutos>
      <TituloProdutos>Escolha bebidas</TituloProdutos>

      <h1>Bebidas</h1>

      <BoxProdutos>
        {bebidas?.map((item, index) => (
                <ProdutosCards
                id={item.id}
                embalagem={item.embalagem}
                nome={item.nome}
                sabor={item.sabor}
                preco={item.preco}
                img={item.image}
                ml={item.ml}
              />
        ))}
        
      </BoxProdutos>
    </ContainerProdutos>
  );
};

export default BodyProduto;
