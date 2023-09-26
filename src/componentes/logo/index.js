import './estilo.css'
import logo from '../../imagens/logo.png'

function Logo() {
    return(
    <div className ="logo">
        <img src={logo} width={60} height={60} alt="logo"></img>
        <p>O <strong>T T</strong> O</p>
    </div>
    )
}

export default Logo