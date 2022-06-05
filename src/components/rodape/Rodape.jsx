import React from "react";
import Coluna from "./Coluna";
import { RodapeContainer } from "./RodapeStyled";

const Rodape = () => {
  return (
    <RodapeContainer>
      <Coluna
        titulo={"Funcionamento"}
        textos={[
          `De Domingo a quinta, das 18h30 às 23h30;
          Sexta e Sabado até 3h`,
          "* Horário pode variar sem aviso prévio.",
        ]}
      />
      <Coluna
        titulo={"Onde Estamos?"}
        textos={[
          "Rua Madalena, 8x - SÃO PAULO - SP.",
          "Rua Olegário Maciel, 11x8 - BARRA DA TIJUCA - RJ.",
        ]}
      />
      <Coluna
        titulo={"Siga nossas novidades"}
        textos={["Inscreva-se e acompanhe nossas promoções e eventos."]}
      />
    </RodapeContainer>
  );
};

export default Rodape;
