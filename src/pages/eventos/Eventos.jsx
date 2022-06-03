import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import CardShows from "../../components/cardShows/CardShows";
import {
  Borda,
  ContainerSection,
} from "../../components/container/ContainerStyled";

const Eventos = () => {
  return (
    <>
      <BoxApresentacao
        destaque={"Toda noite música ao vivo"}
        texto={"O único PUB com shows ao vivo da Kass!"}
      />
      <ContainerSection>
        <CardShows />
      </ContainerSection>
      <Borda />
    </>
  );
};

export default Eventos;
