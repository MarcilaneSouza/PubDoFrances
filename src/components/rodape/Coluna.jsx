import React from "react";
import { Borda } from "../container/ContainerStyled";
import { ColunaRodape, TituloRodape, TextoRodape } from "./RodapeStyled";

const Coluna = ({ titulo, textos, element }) => {
  return (
    <>
      <ColunaRodape>
        <TituloRodape>{titulo}</TituloRodape>
        {textos.map((texto, i) => (
          <TextoRodape key={i}>{texto}</TextoRodape>
        ))}
        {element}
      </ColunaRodape>
      <Borda />
    </>
  );
};

export default Coluna;
