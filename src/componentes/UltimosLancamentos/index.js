import { camisetas } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo" 
import styled from "styled-components"

const UltimosLancamentosConteiner = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
position: relative;
`

const NovasCamisetasConteiner = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
p {
    width: 300px;
}
img {
    width: 200px;
}
&:hover {
    border: 1px solid white;
}
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosConteiner>
            <Titulo
             tamanhoFonte='36px;'
             >Últimos Lançamentos</Titulo>
            <NovasCamisetasConteiner>
            { camisetas.map( camiseta => ( 
                <img src= {camiseta.src} alt='camiseta'/>
            ) ) } 
            </NovasCamisetasConteiner>  
        </UltimosLancamentosConteiner>
        
    )
}

export default UltimosLancamentos