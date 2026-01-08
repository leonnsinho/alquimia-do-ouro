import './ConsertosJoias.css'

function ConsertosJoias() {
  const whatsappUrl = 'https://wa.me/5515991611661?text=' + encodeURIComponent('Olá! Preciso consertar uma joia.')

  const servicos = [
    {
      titulo: 'Soldas e Reparos',
      descricao: 'Consertamos correntes partidas, fechos danificados e estruturas comprometidas com técnicas tradicionais de ourivesaria.'
    },
    {
      titulo: 'Troca de Pedras',
      descricao: 'Substituímos pedras perdidas ou danificadas, garantindo harmonia estética e durabilidade.'
    },
    {
      titulo: 'Ajuste de Tamanho',
      descricao: 'Modificamos o tamanho de anéis, pulseiras e colares mantendo a integridade do design original.'
    },
    {
      titulo: 'Polimento Profissional',
      descricao: 'Restauramos o brilho original de suas joias com cuidado para não comprometer sua estrutura.'
    },
    {
      titulo: 'Reforço Estrutural',
      descricao: 'Fortalecemos peças fragilizadas pelo tempo ou uso frequente, garantindo maior durabilidade.'
    },
    {
      titulo: 'Recuperação de Banhos',
      descricao: 'Renovamos banhos de ouro, ródio ou outros metais preciosos devolvendo o aspecto original.'
    }
  ]

  return (
    <div className="page consertos-joias">
      
      {/* ================================================
          HERO - CONSERTOS DE JOIAS
          ================================================ */}
      <section className="consertos-hero">
        <div className="consertos-hero-bg">
          <div className="consertos-hero-gradient"></div>
          <div className="consertos-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="consertos-hero-content">
            <h1 className="consertos-hero-title">
              Consertos <em>de Joias</em>
            </h1>
            <p className="consertos-hero-texto">
              Joias especiais merecem cuidado especializado. Devolvemos vida a peças 
              danificadas com técnicas tradicionais de ourivesaria e atenção aos detalhes.
            </p>
          </div>
        </div>
      </section>

      {/* Imagem e texto */}
      <section className="section consertos-conceito bg-off-white-quente">
        <div className="container">
          <div className="conceito-grid">
            <div className="conceito-imagem">
              <img src="/Close-up de mãos artesãs moldando ouro com precisão e delicadeza.png" alt="Mãos de ourives trabalhando em conserto de joias" />
            </div>
            <div className="conceito-texto">
              <h2>Cada joia merece uma segunda chance.</h2>
              <p>
                Um anel com o aro partido, uma corrente que se soltou, uma pedra que caiu — 
                acidentes acontecem. Mas isso não significa que sua joia precisa ser descartada 
                ou substituída.
              </p>
              <p>
                Na Alquimia do Ouro, consertamos joias com o mesmo cuidado com que criamos 
                peças exclusivas. Usamos técnicas tradicionais de ourivesaria para garantir 
                reparos duradouros e invisíveis, preservando a beleza e integridade da peça original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section section-lg consertos-servicos">
        <div className="container">
          <h2 className="text-center">Nossos Serviços de Conserto</h2>
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

      {/* Garantia */}
      <section className="section consertos-garantia">
        <div className="container text-center">
          <h2>Compromisso com a Qualidade</h2>
          <div className="divider divider-center"></div>
          <p className="garantia-texto">
            Todos os nossos consertos são realizados por ourives experientes 
            e vêm com garantia de qualidade. Tratamos cada peça como se fosse única — 
            porque para você, ela realmente é.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg consertos-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Sua joia precisa de reparo?</h2>
          <p>
            Entre em contato conosco. Faremos uma avaliação cuidadosa e 
            apresentaremos a melhor solução para devolver vida à sua joia.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  )
}

export default ConsertosJoias
