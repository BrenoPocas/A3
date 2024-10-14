import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function Newsletter() {

    return <div>
        <Header/>
        <section className="seccao">

            <div className="a">

                <ItensConfiguracoes/>

                <div className="b">

                    <h1 className="titulo_pagina_configuracoes">NEWSLETTER</h1>

                    <h2>Conteudo aqui</h2>
                    
                </div>

            </div>

        </section>
        <Footer/>
    </div>;
}

export default Newsletter