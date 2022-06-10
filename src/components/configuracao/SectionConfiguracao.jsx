import React from "react";
import { AbaProdutos } from "../CardProduto/StyledProdutos";
import BodyConfig from "./BodyConfig";
import CabecalhoConfig from "./CabecalhoConfig";

const Configuracao = () => {
  return (
    <AbaProdutos>
      <CabecalhoConfig />
      <BodyConfig />
    </AbaProdutos>
  );
};

export default Configuracao;
