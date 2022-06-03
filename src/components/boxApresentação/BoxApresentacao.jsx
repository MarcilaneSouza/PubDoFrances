import React from "react";
import {
  Apresentacao,
  ApresentacaoDestaque,
  Boxpresentation,
} from "./BoxApresentacaoStyled";

const BoxApresentacao = ({ destaque, texto }) => {
  return (
    <Boxpresentation>
      <ApresentacaoDestaque>{destaque}</ApresentacaoDestaque>
      <Apresentacao>{texto}</Apresentacao>
    </Boxpresentation>
  );
};

export default BoxApresentacao;
