import React from "react";
import { Input } from "../form/FormStyled";
import {
  AbaProdutos,
  cabecalhoProdutos,
  ConteudoCabecalho,
} from "./StyledProdutos";
const SectionProdutos = () => {
  return (
    <AbaProdutos>
      <cabecalhoProdutos>
        <ConteudoCabecalho>
          <p>
            Teste de Titulo
            <span>
              <p></p>Segunda, 2 de Fev de 2021
            </span>
          </p>
          <Input type={"text"} placeholder=" comidas, drinks etc..." />
        </ConteudoCabecalho>
      </cabecalhoProdutos>
    </AbaProdutos>
  );
};

export default SectionProdutos;
