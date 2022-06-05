import React from "react";
import { FormContainer, Input } from "../form/FormStyled";
import Coluna from "./Coluna";
import { LinkNav, NavRodape, RodapeContainer } from "./RodapeStyled";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialGooglePlusCircular,
} from "react-icons/ti";

const Rodape = () => {
  return (
    <RodapeContainer>
      <Coluna
        titulo={"Funcionamento"}
        textos={[
          `De Domingo a quinta, das 18h30 às 23h30;
          Sexta e Sabado até 3h`,
          "* Horário pode variar sem aviso prévio.",
        ]}
      />
      <Coluna
        titulo={"Onde Estamos?"}
        textos={[
          "Rua Madalena, 8x - SÃO PAULO - SP.",
          "Rua Olegário Maciel, 11x8 - BARRA DA TIJUCA - RJ.",
        ]}
      />
      <Coluna
        titulo={"Siga nossas novidades"}
        textos={["Inscreva-se e acompanhe nossas promoções e eventos."]}
        element={
          <FormContainer>
            <fieldset>
              <Input type={"text"} placeholder="Seu E-mail" />
            </fieldset>
          </FormContainer>
        }
      />

      <Coluna
        titulo={"Sobre"}
        textos={[
          "Agenda",
          "Preços e promoções",
          "Cardápio",
          "Galeria",
          "Reserva e contatos",
        ]}
        element={
          <NavRodape>
            <LinkNav href="#">
              <TiSocialFacebook />
            </LinkNav>
            <LinkNav href="#">
              <TiSocialTwitter />
            </LinkNav>
            <LinkNav href="#">
              <TiSocialInstagram />
            </LinkNav>
            <LinkNav href="#">
              <TiSocialGooglePlusCircular />
            </LinkNav>
          </NavRodape>
        }
      />
    </RodapeContainer>
  );
};

export default Rodape;
