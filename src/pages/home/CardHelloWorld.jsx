import React from "react";
import { ContainerSection } from "../../components/container/ContainerStyled";
import ComponentDraggable from "../../components/draggable/ComponentDraggable";
import { DivHello, Hello } from "../../components/sectionHello/BoxHello";

const CardHelloWorld = () => {
  return (
    <>
      <ContainerSection>
        <DivHello>
          <Hello>Hello World</Hello>
          <Hello secundary>Esta é uma pequena demonstracao</Hello>
        </DivHello>
      </ContainerSection>
      <ContainerSection>
        <ComponentDraggable
          component={{ open: "comidinhas", close: "clique aqui" }}
        />
      </ContainerSection>
    </>
  );
};

export default CardHelloWorld;
