import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection } from "../../components/container/ContainerStyled";
import { Helmet } from "react-helmet";
import Produtos from "../produtos/Produtos";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>PUB | Home</title>
      </Helmet>
      <BoxApresentacao
        destaque={"PUB do Francês"}
        texto={"Drinks e Lanches únicos!"}
      />

      <Produtos />
    </>
  );
};

export default Home;
