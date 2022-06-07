import { ProdutosContainer } from "../../components/CardProduto/StyledProdutos";
import MenuLateralProdutos from "../../components/CardProduto/MenuLateralProdutos";
import PainelHorizontal from "../../components/CardProduto/PainelHorizontal";

const Produtos = () => {
  return (
    <>
      <ProdutosContainer>
        <MenuLateralProdutos />
        <PainelHorizontal />
      </ProdutosContainer>
    </>
  );
};

export default Produtos;
