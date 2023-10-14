import Input from '../input'
import styled from 'styled-components'
import { getCamisetas } from '../../Servicos/camisetas'
import { useEffect, useState } from 'react'
import { postFavorito } from '../../Servicos/favoritos'

const PesquisaConteiner = styled.section`
    color: #000;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
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
        const [camisetas, setCamisetas] = useState([])

        useEffect(() => {
            fetchCamisetas()
        }, [])

        async function fetchCamisetas() {
            const camisetaDaAPI = await getCamisetas()
            setCamisetas(camisetaDaAPI)
        }

        async function insertFavorito(id) {
            await postFavorito(id)
            alert(`Livro de id:${id} inserido!`)
    }

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
                <Resultado onClick={() => insertFavorito(camiseta.id)}>
                        <img src={camiseta.src} alt='camiseta'/>
                        <p>{camiseta.nome}</p>
                </Resultado>

            ))}
        </PesquisaConteiner>
    )
}

export default Pesquisa