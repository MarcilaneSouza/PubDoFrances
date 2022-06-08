import React from "react";
import * as S from "./imgStyled.js";

const CopoBeer = () => {
  return (
    <>
      <S.H>5 motivos para fazer um brinde conosco:</S.H>

      <S.DivOne>
        <S.Beeer />
        <S.DivText>
          <S.P>
            Temos a melhor e maior variedades de cerveja: Artesanais, Importadas
            e Nacionais com aquele MALTE inesquecível! 
          </S.P>
        </S.DivText>
      </S.DivOne>
    </>
  );
};

export default CopoBeer;
