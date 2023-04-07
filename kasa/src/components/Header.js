import "./styles/Header.css"
import logo from '../assets/logo192.png'

function Header(){
    return(
    <header className="navigation-container">
        <img src={logo} className="logo-kasa" />
        <nav>
            <ul> 
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A propos</a></li>
            </ul>
        </nav>
        
    </header>
    )
}

export default Header