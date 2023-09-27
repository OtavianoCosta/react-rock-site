import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { camisetas } from './dadosPesquisa'

const PesquisaConteiner = styled.section`
    color: #000;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h1`
    color: #000;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
    `


function Pesquisa () {
        const [camisetasPesquisadas, setCamisetasPesquisadas] = useState([])

        console.log(camisetasPesquisadas)

    return (
        <PesquisaConteiner>
            <Titulo>Voce disse... Camiseta de banda?</Titulo>
            <Input 
                placeholder="Qual banda procura?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = camisetas.filter( camiseta => camiseta.nome.includes(textoDigitado))
                    setCamisetasPesquisadas(resultadoPesquisa)
                }}
            />
            { camisetasPesquisadas.map( camiseta => (
                <Resultado>
                    <p>{camiseta.nome}</p>
                    <img src={camiseta.src}/>
                </Resultado>

            ))}
        </PesquisaConteiner>
    )
}

export default Pesquisa