import './Portfolio.css'

function Portfolio() {
  const whatsappUrl = 'https://wa.me/5515991611661?text=' + encodeURIComponent('Olá! Vi o portfólio e gostaria de criar minha própria joia.')

  // Peças fictícias para o portfólio com legendas poéticas
  const pecas = [
    {
      id: 1,
      titulo: 'Aurora',
      legenda: 'Onde o primeiro raio de sol encontra o ouro.',
      tipo: 'Anel',
      imagem: '/aurora.png'
    },
    {
      id: 2,
      titulo: 'Raízes',
      legenda: 'O que nos conecta ao que veio antes.',
      tipo: 'Colar',
      imagem: '/raizes.png'
    },
    {
      id: 3,
      titulo: 'Silêncio',
      legenda: 'A beleza do que não precisa ser dito.',
      tipo: 'Brincos',
      imagem: '/silencio.png'
    },
    {
      id: 4,
      titulo: 'Travessia',
      legenda: 'Cada curva conta uma jornada.',
      tipo: 'Pulseira',
      imagem: '/travessia.png'
    },
    {
      id: 5,
      titulo: 'Memória',
      legenda: 'O tempo transformado em forma.',
      tipo: 'Anel',
      imagem: '/memoria.png'
    },
    {
      id: 6,
      titulo: 'Constelação',
      legenda: 'Fragmentos de luz que se encontram.',
      tipo: 'Colar',
      imagem: '/constelação.png'
    },
    {
      id: 7,
      titulo: 'Origem',
      legenda: 'De onde tudo começa e para onde tudo volta.',
      tipo: 'Anel',
      imagem: '/origem.png'
    },
    {
      id: 8,
      titulo: 'Véu',
      legenda: 'Entre o visível e o sentido.',
      tipo: 'Brincos',
      imagem: '/veu.png'
    },
    {
      id: 9,
      titulo: 'Abraço',
      legenda: 'O ouro que envolve como afeto.',
      tipo: 'Pulseira',
      imagem: '/abraço.png'
    }
  ]

  return (
    <div className="page portfolio">
      
      {/* ================================================
          HERO - PORTFÓLIO
          ================================================ */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg">
          <div className="portfolio-hero-gradient"></div>
          <div className="portfolio-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="portfolio-hero-content">
            <h1 className="portfolio-hero-title">
              Cada peça, uma <em>história.</em>
            </h1>
            <p className="portfolio-hero-texto">
              Joias que não podem ser compradas — apenas criadas para quem as sonhou.
              Cada criação aqui nasceu de uma história real, de uma emoção verdadeira.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          GRID DO PORTFÓLIO
          ================================================ */}
      <section className="portfolio-galeria">
        <div className="container-wide">
          <div className="portfolio-grid">
            {pecas.map((peca) => (
              <article key={peca.id} className="portfolio-card">
                <div className="portfolio-card-imagem">
                  <img 
                    src={peca.imagem} 
                    alt={peca.titulo}
                    className="portfolio-foto"
                  />
                  <div className="portfolio-card-tipo">
                    <span>{peca.tipo}</span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-titulo">{peca.titulo}</h3>
                  <p className="portfolio-card-legenda">{peca.legenda}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          CTA FINAL
          ================================================ */}
      <section className="portfolio-cta">
        <div className="portfolio-cta-bg">
          <div className="portfolio-cta-circle"></div>
        </div>
        <div className="container">
          <div className="portfolio-cta-content">
            <span className="portfolio-cta-label">Sua Vez</span>
            <h2 className="portfolio-cta-titulo">
              Sua história também<br/>
              <em>pode virar arte.</em>
            </h2>
            <p className="portfolio-cta-texto">
              Cada joia deste portfólio começou com uma conversa. 
              A próxima pode ser a sua.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-cta-button"
            >
              <span>Criar Minha Joia</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Portfolio
