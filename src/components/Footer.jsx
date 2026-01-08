import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [showMap, setShowMap] = useState(false)

  const handleMapClick = (e) => {
    e.preventDefault()
    // Tenta abrir o modal primeiro
    setShowMap(true)
    // Se o iframe não carregar, o usuário pode usar o link direto que aparecerá no modal
  }

  const handleCloseMap = () => {
    setShowMap(false)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo dourada sem fundo.png" alt="Alquimia do Ouro" className="footer-logo-image" />
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
            <p className="footer-address">
              Av. Pres. Juscelino Kubitschek de Oliveira, 660<br />
              Sala 37, 3º Andar<br />
              Centro, Sorocaba/SP
            </p>
            <button
              onClick={handleMapClick}
              className="footer-map-button"
            >
              Como Chegar
            </button>
            <a
              href="mailto:atelie@alquimiadoouro.com.br"
              className="footer-email"
            >
              atelie@alquimiadoouro.com.br
            </a>
            <a
              href="https://wa.me/5515991611661"
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
          <p className="footer-designer">
            Designed by <a href="https://stormcore.com.br" target="_blank" rel="noopener noreferrer">Stormcore</a>
          </p>
        </div>
      </div>

      {/* Modal com Google Maps */}
      {showMap && (
        <div className="map-modal" onClick={handleCloseMap}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="map-modal-close" onClick={handleCloseMap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="map-modal-header">
              <h3>Alquimia do Ouro</h3>
              <p>Av. Pres. Juscelino Kubitschek de Oliveira, 660 - Sala 37, 3º Andar</p>
              <a
                href="https://www.google.com/maps/dir//Av.+Pres.+Juscelino+Kubitschek+de+Oliveira,+660+-+Centro,+Sorocaba+-+SP,+18035-380"
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-link"
              >
                Abrir no Google Maps
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Av.+Pres.+Juscelino+Kubitschek+de+Oliveira,+660,+Centro,+Sorocaba,+SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Alquimia do Ouro"
            />
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
