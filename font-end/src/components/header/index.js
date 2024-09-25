import './styles.css'
import './script'
import logo from './img/logo.png'
import close_white_36dp from './img/close_white_36dp.svg'
import menu_white_36dp from './img/menu_white_36dp.svg'
import useWindowDimensions from '../../hooks/windowDimensions'

// const itemsList = [
    // {   
        // key: 1,
        // label: 'Página Inicial',
        // name: 'home',
        // link: '#'
    // },
    // {   
        // key: 2,
        // label: 'Quero ser voluntário',
        // name: 'home2',
        // link: '#'
    // },
    // {   
        // key: 3,
        // label: 'Sou uma ONG',
        // name: 'home3',
        // link: '#'
    // },
    // {   
        // key: 4,
        // label: 'Pontos de Coleta',
        // name: 'home4',
        // link: '#'
    // },
    // {   
        // key: 5,
        // label: 'Mais',
        // name: 'home5',
        // link: '#'
    // }
// ]

const currentPage = 'home2'
  
function header() {
    const { height, width } = useWindowDimensions();


    return (
        
        <header>
        <nav className="nav_bar">
            <div className='logo_nome_projeto'>
                <img className="logo" src={logo}/>
                <h1 className="nome_projeto">Projeto</h1>
                {height} : {width}
            </div>
            <div className="nav_list">
                <ul>
                    <li className="nav_item"><a href="#" className="nav_link">Página Inicial</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Sou voluntário</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Sou ONG</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Pontos de Coleta</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Mais</a></li>
                </ul>
            </div>
            <div className="login_button">
                <button><a href="#">Login</a></button>
            </div>

            <div className="mobile_menu_icon">
                <button onclick="menuShow()">
                    <img src={menu_white_36dp}/>
                </button>
            </div>
        </nav>
        <div className="mobile_menu">
            <ul>
                    <li className="nav_item"><a href="#" className="nav_link">Página Inicial</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Quero ser voluntário</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Sou uma ONG</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Pontos de Coleta</a></li>
                    <li className="nav_item"><a href="#" className="nav_link">Mais</a></li>
            </ul>

            <div className="login_button">
                <button><a href="#">Login</a></button>
            </div>
        </div>
    </header>
    );
}

export default header



{/* <header className="header"> */}
{/*  */}
{/* <img src={logo}/> */}
    {/*  */}
    {/* { */}
        // itemsList.map(item => {
            // return (
                // <a className={`App_link ${item.name === currentPage ? 'selected' : ''}`} href={item.link} target="_blank">{item.label}</a>
            // )
        // })
    // }
{/* </header> */}