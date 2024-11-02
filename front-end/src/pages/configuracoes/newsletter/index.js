import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';
import IMAGEN from './img/em_construcao1.png'

function Newsletter() {

    return <div>
        <Header/>
        <section className="seccao">

            <div className="a">

                <ItensConfiguracoes/>

                <div className="b">

                    <h1 className="titulo_pagina_configuracoes">NEWSLETTER</h1>
                    <img src={IMAGEN} alt="Em construção" />
                    
                </div>

            </div>

        </section>
        <Footer/>
    </div>;
}

export default Newsletter