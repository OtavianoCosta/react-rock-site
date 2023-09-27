import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`


function Logo() {
    return(
    <LogoContainer>
        <LogoImg 
        src={logo} 
        width={90} 
        height={90} 
        alt="logo"
        />
        <p>O<strong>TT</strong>O</p>
    </LogoContainer>
    )
}

export default Logo