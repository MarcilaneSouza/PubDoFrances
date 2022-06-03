import React from "react";
import {
  CartaoArtista,
  DataApresentacao,
  DestaqueArtista,
  ImgArtista,
  TituloArtista,
} from "./cardShowsStyled";
const kass = "assets/images/artistas/kass.jpg";

const CardShows = () => {
  return (
    <>
      <DestaqueArtista>
        <CartaoArtista>
          <TituloArtista>Kass, a braba</TituloArtista>
          <DataApresentacao>Todas as sextas, a partir das 19h</DataApresentacao>
          <ImgArtista src={kass} />
        </CartaoArtista>
      </DestaqueArtista>
    </>
  );
};

export default CardShows;
