import './estilo.css'
import logo from '../../imagens/logo.png'

function Logo() {
    return(
    <div className ="logo">
        <img 
        src={logo} 
        width={90} 
        height={90} 
        alt="logo"
        className="img-space">
        </img>
        <p>O <strong className="strong-red"> T  T</strong> O</p>
    </div>
    )
}

export default Logo