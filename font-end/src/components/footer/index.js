import './styles.css'
import './script'
  
function footer() {

    return (
        <footer>

        <div className="paginas_plataforma">
          <h1>Doe+</h1>
          <ul>
            <li className="nav_item"><a href="sobre-nos.html" className="nav_link">Sobre Nós</a></li>
            <li className="nav_item"><a href="politica-privacidade.html" className="nav_link">Política de Privacidade</a></li>
            <li className="nav_item"><a href="termos-de-uso.html" className="nav_link">Termos de Uso</a></li>
            <li className="nav_item"><a href="faq.html" className="nav_link">FAQ</a></li>
            <li className="nav_item"><a href="blog.html" className="nav_link">Blog</a></li>
            <li className="nav_item"><a href="forum.html" className="nav_link">Fórum</a></li>
            <li className="nav_item"><a href="fale-conosco.html" className="nav_link">Fale Conosco</a></li>
          </ul>
        </div>
      
        <div className="paginas_voluntariado">
          <h1>Voluntariado</h1>
          <ul>
            <li className="nav_item"><a href="Voluntariado.html" className="nav_link">Voluntariado</a></li>
            <li className="nav_item"><a href="ongs.html" className="nav_link">Para ONGs</a></li>
          </ul>
        </div>
      
        <div className="paginas_redes_sociais">
          <h1>Siga a Doe+</h1>
          <ul>
            <li className="nav_item"><a href="https://wa.me/seu-numero" className="nav_link">WhatsApp</a></li>
            <li className="nav_item"><a href="https://www.instagram.com/seudominsta" className="nav_link">Instagram</a></li>
            <li className="nav_item"><a href="https://www.facebook.com/seudominsta" className="nav_link">Facebook</a></li>
          </ul>
        </div>
      
        <div className="paginas_ODS">
          <h1>ODS</h1>
          <ul>
            <li className="nav_item"><a href="https://brasil.un.org/pt-br/sdgs" className="nav_link">Objetivos de Desenvolvimento Sustentável</a></li>
          </ul>
        </div>

      </footer>
    );
}

export default footer