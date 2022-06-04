import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { Apresentacao } from "../../components/boxApresentação/BoxApresentacaoStyled";
import CardShows from "../../components/cardShows/CardShows";
import {
  Borda,
  ContainerSection,
} from "../../components/container/ContainerStyled";

const Eventos = () => {
  return (
    <>
      <article style={{ width: "60%", margin: "0 auto", padding: "1rem" }}>
        <Apresentacao>
          Shows ao vivo todos os dias no ambiente mais bem frenquentado da
          cidade
        </Apresentacao>
        <Borda />
      </article>
      <BoxApresentacao
        destaque={"Toda noite música ao vivo"}
        texto={"O único PUB com shows ao vivo da Kass!"}
      />
      <ContainerSection>
        <CardShows />
      </ContainerSection>
    </>
  );
};

export default Eventos;
