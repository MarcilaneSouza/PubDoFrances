import React from "react";
import * as S from './styledCard'


const ListasProdutos = () => {
  return (
    <>
      <nav>
        <S.Ul>
          <S.Li>Bebidas</S.Li>
          <S.Li>Combos</S.Li>
          <S.Li>Drinks</S.Li>
          <S.Li>Lanches</S.Li>
          <S.Li>Petiscos</S.Li>
        </S.Ul>
      </nav>
    </>
  );
};

export default ListasProdutos;
