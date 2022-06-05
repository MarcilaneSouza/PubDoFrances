import React from "react";
import { Borda } from "../container/ContainerStyled";
import { ColunaRodape, TituloRodape, TextoRodape } from "./RodapeStyled";

const Coluna = ({ titulo, textos }) => {
  return (
    <>
      <ColunaRodape>
        <TituloRodape>{titulo}</TituloRodape>
        {textos.map((texto, i) => (
          <TextoRodape key={i}>{texto}</TextoRodape>
        ))}
      </ColunaRodape>
      <Borda />
    </>
  );
};

export default Coluna;
