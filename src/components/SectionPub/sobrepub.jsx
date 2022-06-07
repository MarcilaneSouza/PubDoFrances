import React from 'react'
import * as Style from "./sobrestyle";
import logosobre from "/public/assets/images/sobre/sobrelogo.jpg"

 const Sobrepub = () => {
  return (
   <Style.Sobre>
        <Style.Imagem src={logosobre}/>
       
    <Style.I>  
<Style.Text>O PubDoFrancês foi inaugurado em dezembro de 2021 por Karla, Edu, Guilherme,
        marcilane e Paulo.
a ideia do restaurante surgiu durante um curso que fizeram juntos de programação.
Eles queriam um Bar que fosse um dos principais pontos de encontro para Dev's e 
que oferecesse os melhores serviços para seus clientes como: boa comida, preço moderado e ótimo atendimento.</Style.Text>

<Style.Text>Oferecemos ampla carta de Drinks, bebidas, petiscos, lanches e combos.
Todas as noites, happy hour ao som de música acústica, além das noitadas até a alta madrugada 
comandadas por DJs e bandas ao vivo.
O espaço traz elementos únicos que compõem a decoração aconchegante,confortável e intimista.
Oferecemos os melhores serviços para nossos clientes.</Style.Text>
</Style.I>
      
 </Style.Sobre>

  )
};

export default Sobrepub ;