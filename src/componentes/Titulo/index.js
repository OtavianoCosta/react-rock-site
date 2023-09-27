import styled from "styled-components"

export const Titulo = styled.h2`
width: 100%;
padding: 30px 0;
color: ${props => props.cor || '#000' };
font-size: ${props => props.tamanhoFonte || '18px'}
text-align: ${props => props.Alinhamento || 'center;'}
margin: 0;
`