import './JoiasPersonalizadas.css'

function JoiasPersonalizadas() {
  const whatsappUrl = 'https://wa.me/5515999999999?text=' + encodeURIComponent('Olá! Gostaria de criar uma joia personalizada.')

  return (
    <div className="page joias-personalizadas">
      
      {/* ================================================
          HERO - JOIAS PERSONALIZADAS
          ================================================ */}
      <section className="joias-hero">
        <div className="joias-hero-bg">
          <div className="joias-hero-gradient"></div>
          <div className="joias-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="joias-hero-content">
            <h1 className="joias-hero-title">
              Joias <em>one of one.</em>
            </h1>
            <p className="joias-hero-texto">
              Uma joia personalizada não é escolhida. Ela é criada. Cada detalhe nasce de uma escuta
              profunda, onde transformamos sentimentos em forma, metal e pedra.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          CITAÇÃO - O CLIENTE NÃO PRECISA SABER
          ================================================ */}
      <section className="joias-citacao">
        <div className="container">
          <blockquote className="citacao-content">
            <p className="citacao-frase">
              O cliente não precisa saber o que quer.
            </p>
            <p className="citacao-destaque">
              <em>Nós descobrimos com ele.</em>
            </p>
          </blockquote>
        </div>
      </section>

      {/* ================================================
          CTA FINAL
          ================================================ */}
      <section className="joias-cta-final">
        <div className="joias-cta-bg">
          <div className="joias-cta-circle"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <span className="cta-label">Comece Sua Jornada</span>
            <h2 className="cta-titulo">
              Pronto para criar algo que<br/>
              <em>só você terá?</em>
            </h2>
            <p className="cta-texto">
              Conte-nos sua história. Vamos transformá-la em uma joia 
              que carrega memória, afeto e arte.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="cta-button-text">Iniciar Minha Criação</span>
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

export default JoiasPersonalizadas
