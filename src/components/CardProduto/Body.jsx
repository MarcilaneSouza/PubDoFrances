import React from "react";
import * as S from "./styledCard.js";
import ListasProdutos from "./ListasProdutos";
import Cards from "./Cards.jsx";

const CardsProdutos = (props) => {
  return (
    <>
    <S.Header>
      <S.DivA>
        <S.TituloData>
          <S.H>{props.titulo}</S.H>
          <S.Span>{props.data}</S.Span>
        </S.TituloData>
        <S.InputPesquisa placeholder={props.placeholder} src={props.icons} />
      </S.DivA>
      <S.DivNav>
        <ListasProdutos />
      </S.DivNav>
      <Cards 
         tituloBody='Petiscos'
         descricao='Aqui vai a descrição do produto escolhido'
         descricaoValor='R$ 14.99' />
    </S.Header>
      </>
  );
};

export default CardsProdutos;
