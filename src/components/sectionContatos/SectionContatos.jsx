import React from "react";
import * as Style from "./Contatostyle";
import CartaoContato from "./CartaoContato";
import { listaContato } from "../../data/listaContatos";
import { Borda } from "../container/ContainerStyled";

const SectionContatos = () => {
  return (
    <>
      <Style.H>Contato da equipe</Style.H>
      <Borda />
      <Style.DivCard>
        {listaContato.map((contato, i) => {
          return (
            <CartaoContato
              key={i}
              nome={contato.nome}
              imagem={contato.imagem}
              link={contato.link}
            />
          );
        })}
      </Style.DivCard>
    </>
  );
};

export default SectionContatos;
