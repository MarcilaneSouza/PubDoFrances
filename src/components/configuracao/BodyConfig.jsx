import React from "react";
import { ContainerProdutos } from "../CardProduto/StyledProdutos";
import { FormContainer, Input } from "../form/FormStyled";
import { BsUpload } from "react-icons/bs";

const BodyConfig = () => {
  return (
    <ContainerProdutos>
      <FormContainer>
        <Input type={"text"} placeholder="Nome do produto" />
        <Input type={"text"} placeholder="Embalagem do produto" />
        <Input type={"text"} placeholder="ML do produto" />
        <Input type={"text"} placeholder="Sabor do produto" />
        <Input type={"number"} placeholder="Preço do produto" />
        <label htmlFor="img">
          <BsUpload />
        </label>
        <input style={{ display: "none" }} id="img" type="file" />
      </FormContainer>
    </ContainerProdutos>
  );
};

export default BodyConfig;
