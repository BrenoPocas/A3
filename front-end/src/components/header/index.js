import './style.css'
import './script'
import logo from './img/logo.png'
import menu_white_36dp from './img/menu_white_36dp.svg'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }
    return (
        <header>
        <nav className="nav_bar">
            <div className='logo_nome_projeto'>
                <img alt="LOGO PROJETO" className="logo" src={logo}/>
                <h1 className="nome_projeto">Doe+</h1>
            </div>
            <div className="nav_list">
                <ul>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/')}>PAǴINA INICIAL</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/acoes')}>AÇÕES</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/ongs')}>ONGS</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/pontos-coleta')}>PONTOS DE COLETA</button></li>
                </ul>
            </div>
            <div className="login_button">
                <button className='button_header' onClick={() => navigateTo('/configuracoes/perfil')}>Login</button>
            </div>

            <div className="mobile_menu_icon">
                <button onClick="menuShow()">
                    <img alt="HAMBURGUER" src={menu_white_36dp}/>
                </button>
            </div>
        </nav>
        <div className="mobile_menu">
            <ul>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/')}>PÁGINA INICIAL</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/acoes')}>AÇÕES</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/ongs')}>ONGS</button></li>
                    <li className="nav_item_header"><button className='nav_link_header' onClick={() => navigateTo('/pontos-coleta')}>PONTOS DE COLETA</button></li>
            </ul>

            <div className="login_button">
            <button className='button_header' onClick={() => navigateTo('/configuracoes/perfil')}>Login</button>
            </div>
        </div>
    </header>
    );
}

export default Header