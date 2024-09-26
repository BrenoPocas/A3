import './style.css'
  
function footer() {

    return (
        <footer>

        <div className="paginas_plataforma">
          <h1>Doe+</h1>
          <ul>
            <li className="footer_nav_item"><a href="../pages/home" className="footer_nav_link">Home</a></li>
            <li className="footer_nav_item"><a href="../pages/politica-privacidade" className="footer_nav_link">Política de Privacidade</a></li>
            <li className="footer_nav_item"><a href="../pages/termos" className="footer_nav_link">Termos de Uso</a></li>
            <li className="footer_nav_item"><a href="../pages/faq" className="footer_nav_link">FAQ</a></li>
            <li className="footer_nav_item"><a href="../pages/blog" className="footer_nav_link">Blog</a></li>
            <li className="footer_nav_item"><a href="../pages/forum" className="footer_nav_link">Fórum</a></li>
            <li className="footer_nav_item"><a href="../pages/fale-conosco" className="footer_nav_link">Fale Conosco</a></li>
          </ul>
        </div>
      
        <div className="paginas_voluntariado">
          <h1>Voluntariado</h1>
          <ul>
            <li className="footer_nav_item"><a href="acoes" className="footer_nav_link">Voluntariado</a></li>
            <li className="footer_nav_item"><a href="ongs" className="footer_nav_link">Para ONGs</a></li>
          </ul>
        </div>
      
        <div className="paginas_redes_sociais">
          <h1>Siga a Doe+</h1>
          <ul>
            <li className="footer_nav_item"><a href="https://www.whatsapp.com/" className="footer_nav_link">WhatsApp</a></li>
            <li className="footer_nav_item"><a href="https://www.instagram.com" className="footer_nav_link">Instagram</a></li>
            <li className="footer_nav_item"><a href="https://www.facebook.com" className="footer_nav_link">Facebook</a></li>
          </ul>
        </div>
      
        <div className="paginas_ODS">
          <h1>ODS</h1>
          <ul>
            <li className="footer_nav_item"><a href="https://brasil.un.org/pt-br/sdgs" className="footer_nav_link">Objetivos de Desenvolvimento Sustentável</a></li>
          </ul>
        </div>

      </footer>
    );
}

export default footer