import React from "react";
import { ContainerSection } from "../../components/container/ContainerStyled";
import { DivHello, Hello } from "../../components/sectionHello/BoxHello";

const CardHelloWorld = () => {
  return (
    <ContainerSection>
      <DivHello>
        <Hello>Hello World</Hello>
        <Hello secundary>Esta é uma pequena demonstracao</Hello>
      </DivHello>
    </ContainerSection>
  );
};

export default CardHelloWorld;
