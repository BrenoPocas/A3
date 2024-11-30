import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { useNavigate } from "react-router-dom"

function CriarOng() {

    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }

    return <div>
        
        <Header/>

        <section className='container1'>

        <form className="formulario_criar_conta" action="#">

            <label for="nomeFantasia">Nome Fantasia:</label>
            <input type="text" id="nomeFantasia" required/>

            <label for="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" pattern="/(\d{2}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s\/]?\d{4}[-.\s]?\d{2})/g" placeholder="00.000.000/0000-00" required></input>

            <label for="estado">Estado:</label>
            <select id="estado" required>
                <option value="selecioneEstado">Selecione o estado</option> 
                <option value="ac">Acre</option> 
                <option value="al">Alagoas</option> 
                <option value="am">Amazonas</option> 
                <option value="ap">Amapá</option> 
                <option value="ba">Bahia</option> 
                <option value="ce">Ceará</option> 
                <option value="df">Distrito Federal</option> 
                <option value="es">Espírito Santo</option> 
                <option value="go">Goiás</option> 
                <option value="ma">Maranhão</option> 
                <option value="mt">Mato Grosso</option> 
                <option value="ms">Mato Grosso do Sul</option> 
                <option value="mg">Minas Gerais</option> 
                <option value="pa">Pará</option> 
                <option value="pb">Paraíba</option> 
                <option value="pr">Paraná</option> 
                <option value="pe">Pernambuco</option> 
                <option value="pi">Piauí</option> 
                <option value="rj">Rio de Janeiro</option> 
                <option value="rn">Rio Grande do Norte</option> 
                <option value="ro">Rondônia</option> 
                <option value="rs">Rio Grande do Sul</option> 
                <option value="rr">Roraima</option> 
                <option value="sc">Santa Catarina</option> 
                <option value="se">Sergipe</option> 
                <option value="sp">São Paulo</option> 
                <option value="to">Tocantins</option> 
            </select>

            <label for="cidade">Cidade:</label>
            <select id="cidade" required>
                <option value="selecioneCidade">Selecione a cidade</option> 
                <option value="BH">Belo Horizonte</option>
                <option value="yy">yy</option>
                <option value="zz">zz</option>
            </select>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required/>

            <label for="pass">Senha:</label>
            <input type="password" id="pass" name="password" minlength="8" required/>

            <label for="pass">Confirmar Senha:</label>
            <input type="password" id="pass" name="password" minlength="8" required/>                   

            <h1>Ao cadastrar-se você assume que leu e que concorda com nossos termos:</h1>

            <div className='termo'>
                <input type="checkbox" id="checkboxTermosPrivacidade"/>
                <label for="checkboxTermosPrivacidade">Termos de privacidade</label>
            </div>

            <div className='termo'>
                <input type="checkbox" id="checkboxTermosUso"/>
                <label for="checkboxTermosUso">Termos de Uso</label>
            </div>

            <div className='termo'>
                <input type="checkbox" id="checkboxTratamentoDadosPessoais"/>
                <label for="checkboxTratamentoDadosPessoais">Consentimento do Tratamento de Dados Pessoais</label>
            </div>

            <h1>Inscrever-se no newsletter:</h1>

            <div className='sim_nao'>
                <input type="radio" name="my-input" id="yes" value="yes" />
                <label for="yes">Sim</label>
            </div>

            <div className='sim_nao'>
            <input type="radio" name="my-input" id="yes" value="yes" />
            <label for="yes">Não</label>
            </div>

            <button className="botao_criar_conta" type="button">Criar ONG</button>

            <ul>
                        <li className="link_login"><button className="botao_link" onClick={() => navigateTo('/login/criar-conta')}>Cadastrar como Usuário</button></li>
            </ul>

        </form>

        </section>

        <Footer/>

    </div>;
}

export default CriarOng