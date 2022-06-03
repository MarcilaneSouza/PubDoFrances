import React from "react";
import { lista } from "../../data/listaDeArtistas";
import CartaoArtista from "../cartaoArtista/CartaoArtista";
import { DestaqueArtista, ListaArtistas } from "./cardShowsStyled";
const kass = "assets/images/artistas/kass.jpg";

const CardShows = () => {
  return (
    <>
      <DestaqueArtista>
        <CartaoArtista
          nome={"Kass, a braba"}
          data={"Todas as sextas, das 19h às 23h"}
          image={kass}
        />
      </DestaqueArtista>
      <ListaArtistas>
        {lista.map((artista, i) => {
          return (
            <CartaoArtista
              key={i}
              nome={artista.nome}
              data={artista.data}
              image={artista.image}
            />
          );
        })}
      </ListaArtistas>
    </>
  );
};

export default CardShows;
