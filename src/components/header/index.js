import './styles.css'
import logo from './img/logo.png'

const itemsList = [
    {   
        key: 1,
        label: 'Página Inicial',
        name: 'home',
        link: '#'
    },
    {   
        key: 2,
        label: 'Quero ser voluntário',
        name: 'home2',
        link: '#'
    },
    {   
        key: 3,
        label: 'Sou uma ONG',
        name: 'home3',
        link: '#'
    },
    {   
        key: 4,
        label: 'Pontos de Coleta',
        name: 'home4',
        link: '#'
    },
    {   
        key: 5,
        label: 'Mais',
        name: 'home5',
        link: '#'
    }
]

const currentPage = 'home2'

function header() {

    return (
        
        <header className="header">

        <img src={logo}/>
            
            {
                itemsList.map(item => {
                    return (
                        <a className={`App_link ${item.name === currentPage ? 'selected' : ''}`} href={item.link} target="_blank">{item.label}</a>
                    )
                })
            }
        </header>
    );
}

export default header