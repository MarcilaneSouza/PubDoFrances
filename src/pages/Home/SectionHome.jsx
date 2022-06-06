import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection } from "../../components/container/ContainerStyled";
import { Helmet } from "react-helmet";
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
      <ContainerSection></ContainerSection>
    </>
  );
};

export default Home;
