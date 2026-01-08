import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const whatsappUrl = 'https://wa.me/5515991611661?text=' + encodeURIComponent('Olá! Gostaria de criar uma joia personalizada.')

  const pilares = [
    {
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 56c-13.255 0-24-10.745-24-24S18.745 8 32 8s24 10.745 24 24-10.745 24-24 24z"/>
          <path d="M32 20v24M20 32h24"/>
          <circle cx="32" cy="32" r="8"/>
        </svg>
      ),
      titulo: 'Memória & Afeto',
      texto: 'Transformamos seus sentimentos em joias que atravessam gerações.'
    },
    {
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8l6 18h18l-14 11 5 19-15-12-15 12 5-19-14-11h18z"/>
        </svg>
      ),
      titulo: 'Exclusividade Real',
      texto: 'Zero produção em série. Cada peça é única e irrepetível.'
    },
    {
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 52V20l20-12 20 12v32L32 64 12 52z"/>
          <path d="M32 28v20M22 34l10 6 10-6"/>
        </svg>
      ),
      titulo: 'Arte & Tradição',
      texto: 'Ourivesaria familiar com décadas de experiência.'
    },
    {
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="32" r="24"/>
          <path d="M32 16v8M32 40v8M16 32h8M40 32h8"/>
          <circle cx="32" cy="32" r="8"/>
        </svg>
      ),
      titulo: 'Energia & Cura',
      texto: 'Pedras brasileiras com significados simbólicos.'
    },
    {
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c13.255 0 24 10.745 24 24"/>
          <path d="M32 20c6.627 0 12 5.373 12 12"/>
          <circle cx="32" cy="32" r="4"/>
          <path d="M8 32c0-13.255 10.745-24 24-24"/>
          <path d="M20 32c0-6.627 5.373-12 12-12"/>
        </svg>
      ),
      titulo: 'Curadoria Profunda',
      texto: 'O cliente não precisa saber o que quer. Descobrimos juntos.'
    }
  ]

  const etapas = [
    { 
      numero: '01', 
      titulo: 'Conversa e escuta',
      descricao: 'Tudo começa com uma conversa profunda. Queremos ouvir sua história, seus desejos, as emoções que você quer eternizar.',
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="20" r="12"/>
          <path d="M12 52c0-11 9-20 20-20s20 9 20 20"/>
          <path d="M44 28c4 2 8 6 8 12"/>
          <circle cx="52" cy="16" r="8"/>
        </svg>
      )
    },
    { 
      numero: '02', 
      titulo: 'Curadoria e conceito',
      descricao: 'Selecionamos metais, pedras e formas que traduzem sua essência. Cada elemento carrega significado.',
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8L48 24L32 56L16 24L32 8Z"/>
          <path d="M16 24H48"/>
          <path d="M24 24L32 56L40 24"/>
        </svg>
      )
    },
    { 
      numero: '03', 
      titulo: 'Conceito exclusivo',
      descricao: 'Desenvolvemos um conceito único que só existe para você. Cada elemento nasce da sua história.',
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M44 8L56 20L24 52L8 56L12 40L44 8Z"/>
          <path d="M36 16L48 28"/>
          <path d="M8 56L20 44"/>
        </svg>
      )
    },
    { 
      numero: '04', 
      titulo: 'Criação artesanal',
      descricao: 'Mãos experientes dão vida à sua joia. Cada detalhe é trabalhado com paciência e arte.',
      icone: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 36C12 36 8 28 8 20C16 20 24 24 24 32"/>
          <path d="M44 36C52 36 56 28 56 20C48 20 40 24 40 32"/>
          <path d="M24 32C24 44 28 56 32 56C36 56 40 44 40 32"/>
          <circle cx="32" cy="28" r="4"/>
        </svg>
      )
    }
  ]

  const pedras = [
    { 
      nome: 'Quartzo Rosa', 
      energia: 'Amor e cura emocional',
      descricao: 'A pedra do amor incondicional. Suaviza o coração e atrai harmonia.',
      imagem: '/quartzo sem fundo.png'
    },
    { 
      nome: 'Ametista', 
      energia: 'Clareza e proteção',
      descricao: 'Conecta o espiritual ao terreno. Traz paz interior e intuição.',
      imagem: '/ametista sem fundo.png'
    },
    { 
      nome: 'Citrino', 
      energia: 'Prosperidade e vitalidade',
      descricao: 'A pedra do sol. Atrai abundância e renova as energias.',
      imagem: '/citrino sem fundo.png'
    },
    { 
      nome: 'Água-marinha', 
      energia: 'Calma e equilíbrio',
      descricao: 'A essência do mar. Acalma a mente e traz serenidade.',
      imagem: '/agua marinha sem fundo.png'
    }
  ]

  return (
    <div className="home">
      {/* ================================================
          DOBRA 1 - HERO
          ================================================ */}
      <section className="hero">
        {/* Background com gradiente e elementos decorativos */}
        <div className="hero-bg">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-bg-video"
          >
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-bg-gradient"></div>
          <div className="hero-bg-glow hero-bg-glow-1"></div>
          <div className="hero-bg-glow hero-bg-glow-2"></div>
          <div className="hero-bg-pattern"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-line"></span>
            <span className="hero-label-text">Joalheria Autoral</span>
            <span className="hero-label-line"></span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Eternize <em>histórias</em></span>
            <span className="hero-title-line">em uma joia.</span>
          </h1>

          <p className="hero-description">
            Transformamos suas memórias, afetos e histórias em joias únicas. 
            Não trabalhamos com peças prontas — cada criação existe apenas para você.
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            <span className="hero-button-bg"></span>
            <span className="hero-button-text">Criar joia personalizada</span>
            <span className="hero-button-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ================================================
          DOBRA 2 – CONCEITO
          ================================================ */}
      <section className="conceito">
        <div className="conceito-bg">
          <div className="conceito-circle"></div>
        </div>
        
        <div className="container">
          <div className="conceito-grid">
            <div className="conceito-imagem">
              <img 
                src="/Mãos de ourives trabalhando delicadamente ouro derretido em forma líquida dourada brilhante.png" 
                alt="Ourives trabalhando ouro derretido"
                className="conceito-foto"
              />
            </div>
            
            <div className="conceito-content">
              <span className="conceito-label">Nossa Essência</span>
              
              <h2 className="conceito-titulo">
                Uma joia que existe <em>só para você.</em>
              </h2>
              
              <div className="conceito-ornament">
                <span></span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
                </svg>
                <span></span>
              </div>
              
              <p className="conceito-texto">
                Na Alquimia do Ouro, você não escolhe uma joia pronta. Você cria a sua, com Daniele, 
                Paula e Leandro — que ouvem sua história e a transformam em uma peça que só existe para você. 
                Cada joia é única. Nenhuma criação é repetida. Nunca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          DOBRA 3 – PILARES
          ================================================ */}
      <section className="pilares">
        <div className="pilares-bg"></div>
        <div className="container">
          <div className="pilares-header">
            <span className="section-label section-label-light">O que nos define</span>
            <h2 className="pilares-titulo">Nossos Pilares</h2>
            <div className="pilares-header-line"></div>
          </div>
          
          <div className="pilares-grid">
            {pilares.map((pilar, index) => (
              <div key={index} className="pilar-card">
                <div className="pilar-number">0{index + 1}</div>
                <div className="pilar-icon">
                  {pilar.icone}
                </div>
                <h3 className="pilar-titulo">{pilar.titulo}</h3>
                <div className="pilar-line"></div>
                <p className="pilar-texto">{pilar.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          DOBRA 4 – PROCESSO CRIATIVO
          ================================================ */}
      <section className="processo">
        <div className="processo-bg">
          <div className="processo-bg-circle processo-bg-circle-1"></div>
          <div className="processo-bg-circle processo-bg-circle-2"></div>
        </div>
        
        <div className="container">
          <div className="processo-header">
            <span className="section-label">Como criamos</span>
            <h2 className="processo-titulo">
              Sua história. Nosso ouro.<br/>
              <em>Uma única joia.</em>
            </h2>
          </div>
          
          <div className="processo-timeline">
            <div className="timeline-linha">
              <div className="timeline-linha-progress"></div>
            </div>
            
            {etapas.map((etapa, index) => (
              <div key={index} className="timeline-etapa">
                <div className="timeline-etapa-marker">
                  <div className="timeline-etapa-dot">
                    <span className="timeline-etapa-numero">{etapa.numero}</span>
                  </div>
                </div>
                <div className="timeline-etapa-content">
                  <div className="timeline-etapa-icon">
                    {etapa.icone}
                  </div>
                  <h4 className="timeline-etapa-titulo">{etapa.titulo}</h4>
                  <p className="timeline-etapa-descricao">{etapa.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="processo-cta">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="processo-cta-button"
            >
              <span className="processo-cta-text">Iniciar minha jornada criativa</span>
              <span className="processo-cta-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================
          DOBRA 5 – PEDRAS EM DESTAQUE
          ================================================ */}
      <section className="pedras-destaque">
        <div className="pedras-bg">
          <div className="pedras-bg-gradient"></div>
          <div className="pedras-bg-pattern"></div>
        </div>
        
        <div className="container">
          <div className="pedras-wrapper">
            <div className="pedras-intro">
              <span className="section-label">Pedras Brasileiras</span>
              <h2 className="pedras-titulo">
                Cada pedra carrega<br/>
                <em>uma intenção.</em>
              </h2>
              <div className="pedras-divider">
                <span></span>
              </div>
              <p className="pedras-texto">
                Selecionamos cristais brasileiros não apenas pela beleza, 
                mas pela energia e significado que trazem à sua joia. 
                Cada pedra é escolhida para complementar sua história.
              </p>
              <Link to="/pedras-brasileiras" className="pedras-link">
                <span>Explorar todas as pedras</span>
                <div className="pedras-link-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </div>
            
            <div className="pedras-grid">
              {pedras.map((pedra, index) => (
                <div 
                  key={index} 
                  className="pedra-card"
                >
                  <div className="pedra-card-visual">
                    <img 
                      src={pedra.imagem} 
                      alt={pedra.nome}
                      className="pedra-card-image"
                    />
                  </div>
                  <div className="pedra-card-content">
                    <h4 className="pedra-card-nome">{pedra.nome}</h4>
                    <span className="pedra-card-energia">{pedra.energia}</span>
                    <p className="pedra-card-descricao">{pedra.descricao}</p>
                  </div>
                  <div className="pedra-card-border"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          DOBRA 6 – TRADIÇÃO
          ================================================ */}
      <section className="tradicao">
        <div className="tradicao-bg">
          <div className="tradicao-bg-line tradicao-bg-line-1"></div>
          <div className="tradicao-bg-line tradicao-bg-line-2"></div>
          <div className="tradicao-bg-ornament"></div>
        </div>
        
        <div className="container">
          <div className="tradicao-content">
            <h2 className="tradicao-titulo">
              Transformando ouro em <em>significado.</em>
            </h2>
            
            <div className="tradicao-separador">
              <span></span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
              </svg>
              <span></span>
            </div>
            
            <p className="tradicao-texto">
              Uma história construída com as mãos, o tempo 
              e o respeito pelo fazer artesanal.
            </p>
            
            <Link to="/sobre-nos" className="tradicao-link">
              <span>Conheça nossa história</span>
              <div className="tradicao-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          DOBRA 7 – CTA FINAL
          ================================================ */}
      <section className="cta-final">
        <div className="cta-bg">
          <div className="cta-gradient"></div>
          <div className="cta-glow"></div>
        </div>
        
        <div className="container">
          <div className="cta-content">
            <span className="cta-label">Exclusividade Absoluta</span>
            
            <h2 className="cta-titulo">
              Ninguém terá <em>uma igual.</em>
            </h2>
            
            <div className="cta-ornament">
              <span></span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
              </svg>
              <span></span>
            </div>
            
            <p className="cta-subtexto">
              Sua história merece ser eternizada em uma peça única,<br/>
              criada exclusivamente para você.
            </p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="cta-button-text">Criar Minha Joia Exclusiva</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="cta-whatsapp-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            
            <p className="cta-frase-chave">
              "Você não precisa saber exatamente o que quer. <em>Daniele e Paula descobrem com você.</em>"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
