import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function EncerrarConta() {

    return <div>
        <Header/>
        {/* flex-direction column */}
        <div> 
        <ItensConfiguracoes/>
        <section>
            {/* <h2 className='titulo...'>ENCERRAR CONTA</h2> */}
            <div>
                {/* flex-direction column */}
                <p>A</p>
                <p>B</p>
            </div>
        </section>
        </div>
        <Footer/>
    </div>;
}

export default EncerrarConta