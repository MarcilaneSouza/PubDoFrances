import React from "react";
import * as S from "./styledCard.js";

const Cards = (props) => {
  return (
    <>
      <S.TituloData>
        <S.H primary> {props.tituloBody}</S.H>
      </S.TituloData>
      <S.Body>
        <S.DivMenu></S.DivMenu>
        <S.DivMenu></S.DivMenu>
        <S.DivMenu></S.DivMenu>
      </S.Body>
    </>
  );
};

export default Cards;
