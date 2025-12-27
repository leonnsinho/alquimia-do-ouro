import './VintageRestauracao.css'

function VintageRestauracao() {
  const whatsappUrl = 'https://wa.me/5515999999999?text=' + encodeURIComponent('Olá! Gostaria de restaurar uma joia antiga.')

  const servicos = [
    {
      titulo: 'Restauração Completa',
      descricao: 'Devolvemos o brilho e a integridade de peças danificadas pelo tempo, mantendo sua essência original.'
    },
    {
      titulo: 'Ressignificação',
      descricao: 'Transformamos joias antigas em novas criações, preservando a memória afetiva do metal e das pedras.'
    },
    {
      titulo: 'Adaptação de Tamanho',
      descricao: 'Ajustamos anéis, pulseiras e colares para que peças herdadas possam ser usadas com conforto.'
    },
    {
      titulo: 'Limpeza Profissional',
      descricao: 'Cuidado especializado para que suas joias mantenham o brilho sem comprometer a estrutura.'
    }
  ]

  return (
    <div className="page vintage-restauracao">
      
      {/* ================================================
          HERO - VINTAGE & RESTAURAÇÃO
          ================================================ */}
      <section className="vintage-hero">
        <div className="vintage-hero-bg">
          <div className="vintage-hero-gradient"></div>
          <div className="vintage-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="vintage-hero-content">
            <h1 className="vintage-hero-title">
              Vintage & <em>Restauração</em>
            </h1>
            <p className="vintage-hero-texto">
              Algumas joias não precisam ser substituídas. Precisam ser transformadas.
              Restauramos e ressignificamos peças antigas, preservando suas memórias.
            </p>
          </div>
        </div>
      </section>

      {/* Imagem e texto */}}
      <section className="section vintage-conceito bg-off-white-quente">
        <div className="container">
          <div className="conceito-grid">
            <div className="conceito-imagem">
              <img src="/maos trabalhando.png" alt="Mãos trabalhando em restauração de joias" />
            </div>
            <div className="conceito-texto">
              <h2>Cada joia antiga carrega uma história.</h2>
              <p>
                Aquele anel da avó, o broche da bisavó, a aliança de um amor eterno — 
                são mais do que metais e pedras. São fragmentos de vidas, de momentos, 
                de afetos que atravessaram o tempo.
              </p>
              <p>
                Na Alquimia do Ouro, tratamos essas peças com o respeito que merecem. 
                Restauramos o que pode ser preservado e transformamos o que precisa renascer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section section-lg vintage-servicos">
        <div className="container">
          <h2 className="text-center">Nossos Serviços</h2>
          <div className="divider divider-center"></div>
          
          <div className="servicos-grid">
            {servicos.map((servico, index) => (
              <div key={index} className="servico-card">
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="section section-lg vintage-transformacao bg-off-white-quente">
        <div className="container text-center">
          <h2>Transformações</h2>
          <div className="divider divider-center"></div>
          <p className="transformacao-intro">
            Veja como peças esquecidas podem ganhar nova vida.
          </p>
          
          <div className="transformacao-grid">
            <div className="transformacao-item">
              <div className="transformacao-img">
                <img src="/antes.png" alt="Antes - Joia antiga" />
                <p className="transformacao-label">Antes</p>
              </div>
              <div className="transformacao-seta">→</div>
              <div className="transformacao-img">
                <img src="/depois.png" alt="Depois - Joia restaurada" />
                <p className="transformacao-label">Depois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg vintage-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Você tem uma joia com história?</h2>
          <p>
            Conte-nos sobre ela. Vamos descobrir juntos como 
            dar nova vida a essa memória.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Restaurar minha joia
          </a>
        </div>
      </section>
    </div>
  )
}

export default VintageRestauracao
