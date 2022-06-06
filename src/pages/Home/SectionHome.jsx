import React from "react";
import BoxApresentacao from "../../components/boxApresentação/BoxApresentacao";
import { ContainerSection, H, Li, P, Ol, A, Span } from "../../components/container/ContainerStyled";
import { Helmet } from "react-helmet";
import Sobre from "../Sobre/Sobre.jsx";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>PUB | Home</title>
      </Helmet>
      <BoxApresentacao
        destaque={"PUB do Francês"}
        texto={"Drinks e Lanches únicos!"}
      />
      <ContainerSection>
        <H>5 Curiosodades sobre PUBs:</H>
        <Ol type="I">
          <Li>
            <Span>I -</Span> Os primeiros protótipos de pubs surgiram cerca de 2 mil anos
            atrás, a partir da ida dos romanos para o Reino Unido. Foram eles que
            construíram ao longo das estradas e cidades da Grã-Bretanha as
            chamadas tavernas, onde eram comercializados vinhos.
          </Li>
          <Li>
            <Span>II -</Span> De acordo com o Guinness Book of Records, o pub mais antigo da
            Grã-Bretanha ainda em funcionamento é o Ye Olde Fighting Cocks. Ele
            foi construído no século 11 e fica em St Albans, cidade situada ao
            sul do condado de Hertfordshire. Recebeu este nome devido às brigas
            de galo que eram comuns no local.
          </Li>
          <Li>
            <Span>III -</Span> Foi no famoso Cavern Club, pub situado em Liverpool, que os
            Beatles começaram a sua carreira.
          </Li>
          <Li>
            <Span>IV -</Span> Aqui no Brasil, os pubs buscam reproduzir estilo, utilizando em
            sua decoração madeira e bancos altos, deixando um estilo “taverna”,
            inspirado no período medieval, e com pouca iluminação. Além disso, é
            muito comum a venda de grande variedade de chope, inclusive de
            várias marcas importantes, servido em canecas de um pint
            (aproximadamente 570ml).
          </Li>
          <Li>
            <Span>V -</Span> Para se adequar ao gosto do brasileiro, o pub passou por mudanças,
            assim, foi a música ao vivo, comidas típicas brasileiras e jogos,
            passaram a fazer parte dos pubs. Alguns até são temáticos,
            inspirados nos mais diversos temas.
          </Li>
          <P>
            Ficou interessado sobre PUB Do Francês?
            <A href={{ Sobre }}> Clique Aqui</A> e saiba mais sobre o melhor PUB da ponte RIO-SP!
          </P>
        </Ol>
      </ContainerSection>
    </>
  );
};

export default Home;
