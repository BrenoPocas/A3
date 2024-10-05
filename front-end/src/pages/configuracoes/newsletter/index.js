import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function Newsletter() {

    return <div>
        <Header/>
        <ItensConfiguracoes/>
        <section>
            <h2 className='titulo...'>NEWSLETTER</h2>
        </section>
        <Footer/>
    </div>;
}

export default Newsletter