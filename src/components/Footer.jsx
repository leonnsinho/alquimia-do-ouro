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

            <div className="footer-social">
              <a
                href="https://www.pinterest.com/alquimiadoouro/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@alquimiadoouro?lang=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
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
