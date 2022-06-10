import React from "react";
import BodyProduto from "./BodyProduto";
import HeaderProduto from "./HeaderProduto";
import { AbaProdutos } from "./StyledProdutos";
const SectionProdutos = () => {
  return (
    <AbaProdutos>
      <HeaderProduto />
      <BodyProduto />
    </AbaProdutos>
  );
};

export default SectionProdutos;
