import './TransformacaoJoias.css'

function TransformacaoJoias() {
  const whatsappUrl = 'https://wa.me/5515999999999?text=' + encodeURIComponent('Olá! Gostaria de transformar uma joia antiga.')

  const exemplos = [
    {
      titulo: 'Anel em Colar',
      descricao: 'Aquele anel que não usa mais pode se tornar um pingente único e significativo.'
    },
    {
      titulo: 'Alianças em Novo Design',
      descricao: 'Alianças antigas podem ganhar vida nova em um design contemporâneo que você usará.'
    },
    {
      titulo: 'Joias Herdadas Repensadas',
      descricao: 'Peças de família transformadas em criações que combinam com seu estilo atual.'
    },
    {
      titulo: 'Ouro Parado em Movimento',
      descricao: 'Aquelas joias esquecidas na gaveta viram peças que você realmente vai usar.'
    }
  ]

  return (
    <div className="page transformacao-joias">
      
      {/* ================================================
          HERO - TRANSFORMAÇÃO
          ================================================ */}
      <section className="transformacao-hero">
        <div className="transformacao-hero-bg">
          <div className="transformacao-hero-gradient"></div>
          <div className="transformacao-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="transformacao-hero-content">
            <h1 className="transformacao-hero-title">
              Transformação
            </h1>
            <p className="transformacao-hero-texto">
              Nada se perde. Tudo se transforma.
            </p>
          </div>
        </div>
      </section>

      {/* Conceito Principal */}
      <section className="section transformacao-conceito bg-off-white-quente">
        <div className="container">
          <div className="conceito-grid">
            <div className="conceito-imagem">
              <img src="/Antes e depois de uma transformação de joia.jpeg" alt="Antes e depois de uma transformação de joia" />
            </div>
            <div className="conceito-texto">
              <h2>Sua história merece continuar.</h2>
              <p>
                Neste serviço, joias quebradas, peças antigas e o ouro que você já possui ganham um novo 
                significado. Transformamos o que estava parado em uma joia totalmente nova, criada do zero, 
                de acordo com o seu desejo e estilo atual.
              </p>
              <p>
                Reaproveitamos o ouro com cuidado e precisão, respeitando sua história enquanto abrimos 
                espaço para o novo. Um anel pode se tornar colar, uma joia antiga pode renascer em um 
                design contemporâneo — sempre com acabamento artesanal e atenção a cada detalhe.
              </p>
              <p>
                <strong>Você escolhe o que quer criar. Nós cuidamos da alquimia que transforma matéria em símbolo.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos de Transformação */}
      <section className="section section-lg transformacao-exemplos">
        <div className="container">
          <h2 className="text-center">Possibilidades de Transformação</h2>
          <div className="divider divider-center"></div>
          
          <div className="exemplos-grid">
            {exemplos.map((exemplo, index) => (
              <div key={index} className="exemplo-card">
                <div className="exemplo-numero">{String(index + 1).padStart(2, '0')}</div>
                <h3>{exemplo.titulo}</h3>
                <p>{exemplo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section transformacao-diferenciais bg-off-white-quente">
        <div className="container text-center">
          <h2>Por Que Transformar?</h2>
          <div className="divider divider-center"></div>
          
          <div className="diferenciais-lista">
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="24"/>
                  <path d="M32 16v32M16 32h32"/>
                </svg>
              </div>
              <h3>Sustentabilidade</h3>
              <p>Reaproveite ouro que você já tem, sem a necessidade de comprar metal novo.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 8c13.255 0 24 10.745 24 24s-10.745 24-24 24S8 45.255 8 32 18.745 8 32 8z"/>
                  <circle cx="32" cy="32" r="8"/>
                </svg>
              </div>
              <h3>Memória Preservada</h3>
              <p>A história da peça original permanece, mas ganha nova forma e significado.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 8l6 18h18l-14 11 5 19-15-12-15 12 5-19-14-11h18z"/>
                </svg>
              </div>
              <h3>Design Atual</h3>
              <p>Crie algo que você realmente vai usar, adequado ao seu estilo de hoje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg transformacao-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Tem joias paradas na gaveta?</h2>
          <p>
            Vamos transformá-las juntos. Entre em contato e descubra o que 
            podemos criar com o ouro que você já possui.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Quero Transformar Minhas Joias
          </a>
        </div>
      </section>
    </div>
  )
}

export default TransformacaoJoias
