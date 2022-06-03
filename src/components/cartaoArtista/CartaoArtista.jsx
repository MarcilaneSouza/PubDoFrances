import React from "react";
import {
  CardArtista,
  DataApresentacao,
  ImgArtista,
  TituloArtista,
} from "./cartaoArtistaStyled";

const CartaoArtista = ({ nome, data, image }) => {
  return (
    <CardArtista>
      <TituloArtista>{nome}</TituloArtista>
      <DataApresentacao>{data}</DataApresentacao>
      <ImgArtista src={image} />
    </CardArtista>
  );
};

export default CartaoArtista;
