import './Portfolio.css'

function Portfolio() {
  // Peças fictícias para o portfólio com legendas poéticas
  const pecas = [
    {
      id: 1,
      titulo: 'Aurora',
      descricao: 'Onde o primeiro raio de sol encontra o ouro.',
      tipo: 'Anel'
    },
    {
      id: 2,
      titulo: 'Raízes',
      descricao: 'O que nos conecta ao que veio antes.',
      tipo: 'Colar'
    },
    {
      id: 3,
      titulo: 'Silêncio',
      descricao: 'A beleza do que não precisa ser dito.',
      tipo: 'Brincos'
    },
    {
      id: 4,
      titulo: 'Travessia',
      descricao: 'Cada curva conta uma jornada.',
      tipo: 'Pulseira'
    },
    {
      id: 5,
      titulo: 'Memória',
      descricao: 'O tempo transformado em forma.',
      tipo: 'Anel'
    },
    {
      id: 6,
      titulo: 'Constelação',
      descricao: 'Fragmentos de luz que se encontram.',
      tipo: 'Colar'
    },
    {
      id: 7,
      titulo: 'Origem',
      descricao: 'De onde tudo começa e para onde tudo volta.',
      tipo: 'Anel'
    },
    {
      id: 8,
      titulo: 'Véu',
      descricao: 'Entre o visível e o sentido.',
      tipo: 'Brincos'
    },
    {
      id: 9,
      titulo: 'Abraço',
      descricao: 'O ouro que envolve como afeto.',
      tipo: 'Pulseira'
    }
  ]

  return (
    <div className="page portfolio">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Portfólio</h1>
          <p className="subtitle">Criações únicas. Histórias eternizadas.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow text-center">
          <p className="portfolio-intro">
            Cada peça deste portfólio nasceu de uma história real. 
            São joias que não podem ser compradas — apenas criadas para quem as sonhou.
          </p>
        </div>
      </section>

      {/* Grid do Portfólio */}
      <section className="section section-lg portfolio-grid-section">
        <div className="container container-wide">
          <div className="portfolio-grid">
            {pecas.map((peca) => (
              <div key={peca.id} className="portfolio-item">
                <div className="portfolio-imagem">
                  <div className="image-placeholder">
                    <span>Imagem IA: {peca.tipo} "{peca.titulo}"</span>
                  </div>
                  <div className="portfolio-overlay">
                    <span className="portfolio-tipo">{peca.tipo}</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{peca.titulo}</h3>
                  <p>{peca.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg portfolio-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Sua história também pode virar arte.</h2>
          <div className="divider divider-center"></div>
          <a 
            href="https://wa.me/5515999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Criar minha joia
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
