import React, { useState } from "react";
import {TextField, Button} from "#";
function DadosEntrega({ aoEnviar }) {
const [cep, setCep] = useState ("");
const [endereco, setEndereco] = useState("");
const [numero, setNumero] = useState("");
const [estado, setEstado] = useState("");
const [cidade, setCidade] = useState ("");

    return(
        <form
        onSubmit={(event) => {
        event.preventDefault ();
        aoEnviar({ cep, endereco, numero, estado, cidade });
        }}
        >

        <TextField
        value={cep}
        onChange={(event) => {
        setCep(event.target.value);
        }}

        id = "cep"
        label= "CEP"
        type="number" 
        variant= "outlined"
        margin= "normal" 
        />

{/* segunda parte */}

    <TextField
        value={endereco}
        onChange={(event) => {
        setEndereco(event.target.value);

        }}

        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullwidth
        />

    <TextField
        value={numero}
        onChange={(event) => {
        setNumero (event.target.value);

        }}

        id="numero"
        iabel="Numero"
        type="number"
        variant="outlined"
        margin="normal"

        />
        <TextField
        value={estado}
        onChange={(event) =>{
        
        setEstado(event.target.value);
        }}

        id="estado"
        label="Estado"
        type="texto"
        variant="outlined"
        margin= "normal"
        />

    <TextField
        value={cidade}
        onChange= {(event) => {
        setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"

        />

        <Button type="submit" variant="contained" color="primary" fullwidth>
        Finalizar
        </Button>
        </form>
        );
    }
        export default DadosEntrega; 