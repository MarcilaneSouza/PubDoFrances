import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection } from "../../components/container/ContainerStyled";

const Home = () => {
  return (
    <ContainerSection>
      <BoxApresentacao
        destaque={"PUB do Francês"}
        texto={"Drinks e Lanches únicos!"}
      />
    </ContainerSection>
  );
};

export default Home;
