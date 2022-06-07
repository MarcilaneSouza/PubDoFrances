import React from "react";
import { Helmet } from "react-helmet";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection } from "../../components/container/ContainerStyled";
import Sobrepub from "../../components/SectionPub/sobrepub";


const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>PUB | Sobre</title>
      </Helmet>
      <BoxApresentacao
        destaque={"Sobre nós"}
        texto={"A história do PUB é também a história da cidade"}
      />
      <ContainerSection></ContainerSection>
      <Sobrepub/>
    </>
  );
};

export default Sobre;
