import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-text">Alquimia</span>
              <span className="footer-logo-separator">do</span>
              <span className="footer-logo-text">Ouro</span>
            </Link>
            <p className="footer-tagline">
              Transformamos memórias, afetos e histórias em joias únicas.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/sobre-nos">Sobre Nós</Link></li>
              <li><Link to="/joias-personalizadas">Joias Personalizadas</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><Link to="/pedras-brasileiras">Pedras Brasileiras</Link></li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4>Serviços</h4>
            <ul>
              <li><Link to="/vintage-restauracao">Vintage & Restauração</Link></li>
              <li><Link to="/aliancas-personalizadas">Alianças Personalizadas</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Sorocaba, São Paulo</p>
            <a 
              href="https://wa.me/5515999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copy">
            © {currentYear} Alquimia do Ouro. Todos os direitos reservados.
          </p>
          <p className="footer-tradition">
            47 anos transformando ouro em significado.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
