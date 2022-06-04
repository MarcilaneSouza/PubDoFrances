import React from "react";
import * as Style from "./Contatostyle";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "../button/Button";

const CartaoContato = ({ nome, imagem, link }) => {
  return (
    <Style.C>
      <Style.N>{nome}</Style.N>
      <Style.Imagem src={imagem} alt="Imagem dos criadores da página" />
      <Style.Dicon>
        <Style.Icons href={link.linkedin}>
          <Button>
            <FaLinkedin />
          </Button>
        </Style.Icons>
        <Style.Icons href={link.github}>
          <Button>
            <FaGithubSquare />
          </Button>
        </Style.Icons>
      </Style.Dicon>
    </Style.C>
  );
};

export default CartaoContato;
