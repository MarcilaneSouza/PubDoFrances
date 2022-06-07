import React, { useState } from "react";
import {
  ProdutosContainer,
  ReferenceToggle,
  Slide,
  ContainerSlide,
} from "../../components/CardProduto/StyledProdutos";
import MenuLateralProdutos from "../../components/CardProduto/MenuLateralProdutos";

const Produtos = () => {
  const [target, setTarget] = useState({});
  return (
    <ProdutosContainer>
      <MenuLateralProdutos checked={target} />
      <ReferenceToggle
        id="tab1"
        className=""
        type={"radio"}
        name="navAside"
        onChange={(e) =>
          setTarget({ name: e.target.id, checked: e.target.checked })
        }
      />
      <ReferenceToggle
        id="tab2"
        className=""
        type={"radio"}
        name="navAside"
        onChange={(e) =>
          setTarget({ name: e.target.id, checked: e.target.checked })
        }
      />
      <ContainerSlide>
        <Slide right={target.name == "tab1" && target.checked && "0"}>
          <p>Teste de check</p>
        </Slide>
        <Slide right={target.name == "tab2" && target.checked && "0"}>
          <p>Teste de configuração</p>
        </Slide>
      </ContainerSlide>
    </ProdutosContainer>
  );
};

export default Produtos;
