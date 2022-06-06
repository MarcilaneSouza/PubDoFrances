import React, { useState } from "react";
import {TextField, Button} from "#";


    function DadosUsuario({ aoEnviar }) {
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault ();
        aoEnviar({ email, senha });  //objeto literal

        }}
        >

    <TextFieid

        value={email}
        onChange = {(event) => {
        setEmail(event.target.value);

        }}

        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin= "normal"
        fullwidth
        />
    <TextField
        value={senha}
        onChange={(event) => {
        setSenha(event.target.value);
        }}

        id="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullwidth
        />
        <Button type="submit" variant="contained" color="primary ">
            Cadastrar
        </Button>
        </form>
    );
    }
        export default DadosUsuario;