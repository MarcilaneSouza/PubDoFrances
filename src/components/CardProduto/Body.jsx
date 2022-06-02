import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import * as S from "./styledCard.js";
import ListasProdutos from "./ListasProdutos";
import Cards from "./Cards.jsx";

const CardsProdutos = (props) => {

  const[ValorInput,setValorInput] = useState('')
  console.log(ValorInput)

  return (
    <>
    <S.Main>
      <S.DivA>
        <S.TituloData>
          <S.H>{props.titulo}</S.H>
          <S.Span>{props.data}</S.Span>
        </S.TituloData>
        <S.InputPesquisa type='text' placeholder={props.placeholder} src={props.icons} 
        onChange={(e) => setValorInput(e.target.value) } />
      </S.DivA>
      <S.DivNav>
        <ListasProdutos />
      </S.DivNav>
      <Cards 
         tituloBody='Petiscos'
         descricao='Aqui vai a descrição do produto escolhido'
         descricaoValor='R$ 14.99' />
    </S.Main>
      </>
  );
};

export default CardsProdutos;
