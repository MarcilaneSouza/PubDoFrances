import React from "react";
import {
  Apresentacao,
  ApresentacaoDestaque,
  Boxpresentation,
} from "./BoxApresentacaoStyled";

const BoxApresentacao = () => {
  return (
    <Boxpresentation>
      <ApresentacaoDestaque>PUB do Francês</ApresentacaoDestaque>
      <Apresentacao>O único PUB com show ao vivo da Kassi</Apresentacao>
    </Boxpresentation>
  );
};

export default BoxApresentacao;
