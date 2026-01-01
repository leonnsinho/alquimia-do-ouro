import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicosOpen, setIsServicosOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicosOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre-nos', label: 'Sobre Nós' },
    { path: '/joias-personalizadas', label: 'Joias Personalizadas' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/pedras-brasileiras', label: 'Pedras Brasileiras' },
    { path: '/aliancas-personalizadas', label: 'Alianças' },
    { path: '/contato', label: 'Contato' },
  ]

  const servicosLinks = [
    { path: '/consertos-joias', label: 'Consertos de Joias' },
    { path: '/vintage-restauracao', label: 'Vintage & Restauração' },
    { path: '/transformacao-joias', label: 'Transformação' },
  ]

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/nome.png" alt="Alquimia do Ouro" className="logo-image" />
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsServicosOpen(true)}
              onMouseLeave={() => setIsServicosOpen(false)}
            >
              <span 
                className={`nav-link nav-dropdown-toggle ${servicosLinks.some(link => link.path === location.pathname) ? 'active' : ''}`}
                onClick={() => setIsServicosOpen(!isServicosOpen)}
              >
                Serviços
              </span>
              <ul className={`nav-dropdown ${isServicosOpen ? 'nav-dropdown-open' : ''}`}>
                {servicosLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`nav-dropdown-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
