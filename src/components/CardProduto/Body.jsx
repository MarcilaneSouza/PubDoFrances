import React from "react";
import * as S from "./styledCard.js";
import ListasProdutos from "../CardProduto/ListasProdutos";

const CardsProdutos = (props) => {
  return (
    <S.Main>
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
    </S.Main>
  );
};

export default CardsProdutos;
