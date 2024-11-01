import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/card';

function Acoes() {

    return <div>
        <Header />
        <section>
            <h1 className='titulo...'>Nossas Ações</h1>
            <div className='containerCards'>
                <Card img='https://static.vecteezy.com/ti/fotos-gratis/t2/1738866-linda-agua-azul-em-uma-praia-tropical-foto.jpg' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='12' />
                <Card img='https://acdn.mitiendanube.com/stores/001/790/983/products/083a8299-a87b-4d51-8c17-8dbaf8aeca2e-e2f5d96fddeae30cc917030095549100-640-0.png' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
                <Card img='https://noticias.ufal.br/servidor/noticias/2021/9/dap-alerta-sobre-prazo-para-marcacao-de-ferias-do-exercicio-de-2020/@@images/image-768-4d1e676cae9814e623bcfbc6a3362b11.png' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
                <Card img='https://static.vecteezy.com/ti/fotos-gratis/t2/1738866-linda-agua-azul-em-uma-praia-tropical-foto.jpg' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
                <Card img='https://static.vecteezy.com/ti/fotos-gratis/t2/1738866-linda-agua-azul-em-uma-praia-tropical-foto.jpg' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
                <Card img='https://static.vecteezy.com/ti/fotos-gratis/t2/1738866-linda-agua-azul-em-uma-praia-tropical-foto.jpg' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
                <Card img='https://static.vecteezy.com/ti/fotos-gratis/t2/1738866-linda-agua-azul-em-uma-praia-tropical-foto.jpg' titulo='Curtir uma praia' localizacao='Belo Horizonte - MG' descricao='descricao descricao descricao descricao descricao descricao descricao descricao descricao ' acao='acao' />
            </div>
        </section>
        <Footer />
    </div>;
}

export default Acoes