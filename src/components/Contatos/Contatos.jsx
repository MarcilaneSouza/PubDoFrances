import React from 'react'
import * as Style from './Contatostyle'
import karla from '../../Images/karla.jpg'
import guilherme from '../../Images/guilherme.jpg'


const Contatos = () => {
    return (

        <div>
            <div>
                <Style.H>Contato da equipe</Style.H>
            </div>
            <Style.DivCard>
                <Style.C>
                    <Style.N>Karla Valeriano</Style.N>
                    <Style.Imagem src={karla} alt='' />
                </Style.C>

                <Style.C>
                    <Style.N>Guilherme Carvalho</Style.N>
                    <Style.Imagem src={guilherme} alt='' />
                </Style.C>
                <Style.C>
                    <Style.N>Eduardo Moreira</Style.N>
                   
                </Style.C>
                <Style.C>
                    <Style.N>Paulo Oliveira</Style.N>
                   
                </Style.C>
                <Style.C>
                    <Style.N>Marcilane Souza</Style.N>
                   
                </Style.C>

            </Style.DivCard>

        </div>




    )
}

export default Contatos