import React from "react";
import { Helmet } from "react-helmet";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection } from "../../components/container/ContainerStyled";
import SectionContatos from "../../components/sectionContatos/SectionContatos";

const Contatos = () => {
  return (
    <>
      <Helmet>
        <title>PUB | Contatos</title>
      </Helmet>
      <BoxApresentacao
        destaque={"Conheça nossa equipe!"}
        texto={"A melhor equipe da região também está aqui."}
      />
      <ContainerSection>
        <SectionContatos />
      </ContainerSection>
    </>
  );
};

export default Contatos;
