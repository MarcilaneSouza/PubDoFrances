import React from "react";
import * as Style from "./Contatostyle";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "../button/Button";

const CartaoContato = ({ nome, imagem }) => {
  return (
    <Style.C>
      <Style.N>{nome}</Style.N>
      <Style.Imagem src={imagem} alt="Imagem dos criadores da página" />
      <Style.Dicon>
        <Style.Icons>
          <Button>
            {" "}
            <FaLinkedin />
          </Button>
        </Style.Icons>
        <Style.I>
          {" "}
          <Button>
            <FaGithubSquare />
          </Button>
        </Style.I>
      </Style.Dicon>
    </Style.C>
  );
};

export default CartaoContato;
