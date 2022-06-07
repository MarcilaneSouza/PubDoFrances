import React, { useState } from "react";
import SectionProdutos from "./SectionProdutos";
import { ContainerSlide, ReferenceToggle, Slide } from "./StyledProdutos";

const PainelHorizontal = () => {
  const [target, setTarget] = useState({});

  return (
    <>
      <ReferenceToggle
        id="tab1"
        type={"radio"}
        name="navAside"
        onChange={(e) =>
          setTarget({ name: e.target.id, checked: e.target.checked })
        }
      />
      <ReferenceToggle
        id="tab2"
        type={"radio"}
        name="navAside"
        onChange={(e) =>
          setTarget({ name: e.target.id, checked: e.target.checked })
        }
      />
      <ContainerSlide>
        <Slide right={target.name == "tab1" && target.checked && "0"}>
          <SectionProdutos />
        </Slide>
        <Slide right={target.name == "tab2" && target.checked && "0"}></Slide>
      </ContainerSlide>
    </>
  );
};

export default PainelHorizontal;
