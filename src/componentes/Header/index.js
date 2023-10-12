import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderConteiner = styled.header`
  display: flex;
  justify-content: center;
`

function Header () {
    return (
        <HeaderConteiner>
          <Link to="/">
          <Logo/>
          </Link>
          <OpcoesHeader/>
          <IconesHeader/>       
        </HeaderConteiner>
    )
}

export default Header