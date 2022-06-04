import React from "react";
import * as Style from "./Contatostyle";
import CartaoContato from "./CartaoContato";
import { listaContato } from "../../data/listaContatos";

const SectionContatos = () => {
  return (
    <>
      <Style.H>Contato da equipe</Style.H>
      <Style.DivCard>
        {listaContato.map((contato) => {
          return <CartaoContato nome={contato.nome} imagem={contato.imagem} />;
        })}
      </Style.DivCard>
    </>
  );
};

export default SectionContatos;
