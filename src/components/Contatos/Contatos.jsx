import React from 'react'
import {FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import * as Style from './Contatostyle'
import karla from '../../Images/karla.jpg'
import guilherme from '../../Images/guilherme.jpg'
import eduardo from '../../Images/Eduardo.jpg'
import paulo from '../../Images/paulo.jpeg'
import marcilane from '../../Images/marcilane.jpg'


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
                   <Style.Dicon>
                    <Style.Icons><FaLinkedin /> </Style.Icons>
                    <Style.I> <FaGithubSquare /> </Style.I>
                    </Style.Dicon>
                    

              </Style.C>

                <Style.C>
                    <Style.N>Guilherme Carvalho</Style.N>
                    <Style.Imagem src={guilherme} alt='' />
                    <Style.Dicon>
                    <Style.Icons><FaLinkedin /> </Style.Icons>
                    <Style.I> <FaGithubSquare /> </Style.I>
                    </Style.Dicon>
                </Style.C>
                <Style.C>
                    <Style.N>Eduardo Moreira</Style.N>
                    <Style.Imagem src={eduardo} alt='' />
                    <Style.Dicon>
                    <Style.Icons><FaLinkedin /> </Style.Icons>
                    <Style.I> <FaGithubSquare /> </Style.I>
                    </Style.Dicon>

                </Style.C>
                <Style.C>
                    <Style.N>Paulo Oliveira</Style.N>
                    <Style.Imagem src={paulo} alt='' />
                    <Style.Dicon>
                    <Style.Icons><FaLinkedin /> </Style.Icons>
                    <Style.I> <FaGithubSquare /> </Style.I>
                    </Style.Dicon>


                </Style.C>
                <Style.C>
                    <Style.N>Marcilane Souza</Style.N>
                    <Style.Imagem src={marcilane} alt='' />
                    <Style.Dicon>
                    <Style.Icons><FaLinkedin /> </Style.Icons>
                    <Style.I> <FaGithubSquare /> </Style.I>
                    </Style.Dicon>


                </Style.C>

            </Style.DivCard>

        </div>




    )
}

export default Contatos