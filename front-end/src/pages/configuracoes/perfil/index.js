import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function Perfil() {

    return <div>
    <Header/>
    <section className="seccao">

        <div className="a">

            <ItensConfiguracoes/>

            <div className="b">

                <h1 className="titulo_pagina_configuracoes">PERFIL</h1>

                <form action="#">

                    <div>
                      <label for="nome">Login:</label>
                      <input type="text" id="login" required/>
                    </div>

                    <div>
                      <label for="email">E-mail:</label>
                      <input type="email" id="email" required/>
                    </div>

                    <div>
                        <label for="date">Data Nascimento</label>
                        <input type="date" id="date" required/>
                    </div>

                    <div>
                        <label for="pass">Senha:</label>
                        <input type="password" id="pass" name="password" minlength="8" required/>
                    </div>

                    <div>
                        <label for="pass">Confirmar Senha:</label>
                        <input type="password" id="pass" name="password" minlength="8" required/>
                    </div>

                    <div>
                        <label for="sexo">Sexo:</label>
                        <select name="sexo" id="sexo">
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Prefiro não opinar">Prefiro não opinar</option>
                        </select>
                    </div>

                    <div>
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" required/>
                    </div>

                    <div>
                        <label for="home-page">Home-Page:</label>
                        <input type="text" id="home-page" required/>
                    </div>

                    <div>
                        <label for="interesses">Interesses:</label>
                        <select name="interesses" id="interesses" multiple>
                            <option value="Esporte">Ações emergências</option>
                            <option value="Tecnologia">Cidade inteligentes</option>
                            <option value="Cinema">Combate à pobreza</option>
                            <option value="Moda">Consumo consciente</option>
                            <option value="Moda">Crianças</option>
                            <option value="Moda">Cultura e Arte</option>
                            <option value="Moda">Dependentes químicos</option>
                            <option value="Moda">Direitos Humanos</option>
                            <option value="Moda">Educação</option>
                            <option value="Moda">Esportes</option>
                            <option value="Moda">Idosos</option>
                            <option value="Moda">Igualdade de gênero</option>
                            <option value="Moda">Inclusão</option>
                            <option value="Moda">Meio Ambiente</option>
                            <option value="Moda">Mulheres</option>
                            <option value="Moda">Música</option>
                            <option value="Moda">Pessoas com câncer</option>
                            <option value="Moda">Pessoas com deficiência</option>
                            <option value="Moda">Pessoas com doenças raras</option>
                            <option value="Moda">Pessoas em situação de rua</option>
                            <option value="Moda">Proteção animal</option>
                            <option value="Moda">Refugiados</option>
                            <option value="Moda">Saúde</option>
                            <option value="Moda">Treinamento profissional</option>
                            <option value="Moda">Outros…</option>
                        </select>
                    </div>

                    <div>
                    <button className="botao_encerrar_conta" type="button">Salvar</button>
                    </div>

                </form>
                
            </div>

        </div>

    </section>
    <Footer/>
</div>;
}

export default Perfil