import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from"./DadosUsuario";   
import DadosEntrega from "./Dados Entrega";


function FormularioCadastro({ aoEnviar, validarCPF}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState ({}); //objeto vazio
    useEffect(() => {
    console.log(dadosColetados); //Será chamado quando o componente for atualizado
    };

    const formularios = [
        <DadosUsuario aoEnviar= {coletarDados}/>,
        <DadosPessoais aoEnviar= {coletarDados} validarCPF= {validarCPF}/>,
        <DadosEntrega aoEnviar= {coletarDados}/>,
    ];
        
 

    function coletarDados(dados){
        setDados({...dadosColetados,...dados});

        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1);
    }
    
    return <> {formularios[etapaAtual]}</>;
    }
    export default FormularioCadastro; 
    