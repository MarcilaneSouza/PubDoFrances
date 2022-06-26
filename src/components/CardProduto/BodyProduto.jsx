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

 
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://pubdofrances.herokuapp.com/drinks")
      .then((res) => res.json())
      .then((res) => setDrinks(res.drinks));
  });

  useEffect(() => {
    fetch("https://pubdofrances.herokuapp.com/bebidas")
      .then((res) => res.json())
      .then((res) => setBebidas(res.bebidas));
  });

  return (
    <ContainerProdutos>
      <TituloProdutos>Escolha seu pedido</TituloProdutos>

     

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

         {drinks?.map((item, index) => (
                <ProdutosCards
                id={item.id}
                embalagem={item.ingredientes}
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
