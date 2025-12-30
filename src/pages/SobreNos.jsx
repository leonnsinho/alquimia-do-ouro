import { Link } from 'react-router-dom'
import './SobreNos.css'

function SobreNos() {
  const whatsappUrl = 'https://wa.me/5515999999999?text=' + encodeURIComponent('Olá! Gostaria de conhecer mais sobre a Alquimia do Ouro.')

  return (
    <div className="page sobre-nos">
      
      {/* ================================================
          HERO - SOBRE NÓS
          ================================================ */}
      <section className="sobre-hero">
        <div className="sobre-hero-bg">
          <div className="sobre-hero-gradient"></div>
          <div className="sobre-hero-pattern"></div>
        </div>
        
<div className="container">
          <div className="sobre-hero-content">
            <span className="sobre-hero-label">Nossa História</span>
            <h1 className="sobre-hero-title">
              Uma tradição de <em>47 anos</em><br/>
              em ourivesaria
            </h1>
            <div className="sobre-hero-ornament">
              <span></span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
              </svg>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          NARRATIVA PRINCIPAL
          ================================================ */}
      <section className="sobre-narrativa">
        <div className="container">
          <div className="narrativa-content">
            <div className="narrativa-numero">
              <span>1978</span>
            </div>
            <div className="narrativa-texto">
              <p className="narrativa-destaque">
                A Alquimia do Ouro nasce de uma tradição familiar de 47 anos em ourivesaria.
              </p>
              <p>
                O que começou com ferramentas simples e muito cuidado, hoje se transforma em 
                joias que carregam histórias, afetos e intenções. Cada peça que sai das nossas 
                mãos carrega a essência de quem a encomendou.
              </p>
              <p>
                Não trabalhamos com produção em série. Não seguimos tendências passageiras. 
                <strong>Criamos joias que atravessam gerações.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          CITAÇÃO DESTAQUE
          ================================================ */}
      <section className="sobre-citacao">
        <div className="sobre-citacao-bg"></div>
        <div className="container">
          <blockquote className="citacao-principal">
            <div className="citacao-aspas">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
              </svg>
            </div>
            <p>Criamos para quem entende que luxo não é excesso — é significado.</p>
            <div className="citacao-linha"></div>
          </blockquote>
        </div>
      </section>

      {/* ================================================
          NOSSA FILOSOFIA
          ================================================ */}
      <section className="sobre-filosofia">
        <div className="container">
          <div className="filosofia-grid">
            <div className="filosofia-visual">
              <div className="filosofia-imagem">
                <img src="/trabalhando no ouro.png" alt="Artesão trabalhando em ouro" />
              </div>
              <div className="filosofia-imagem-accent"></div>
            </div>
            
            <div className="filosofia-content">
              <span className="section-label">Nossa Filosofia</span>
              <h2 className="filosofia-titulo">
                O cliente não precisa saber<br/>
                <em>o que quer.</em>
              </h2>
              <div className="filosofia-divider">
                <span></span>
              </div>
              <p className="filosofia-texto">
                Nós descobrimos com ele. Nossa filosofia é simples: ouvir profundamente, 
                criar com alma e entregar algo que não existe em nenhum outro lugar do mundo.
              </p>
              <p className="filosofia-texto">
                Cada conversa é uma jornada de descoberta. Cada joia, uma resposta única 
                para uma história única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          VALORES
          ================================================ */}
      <section className="sobre-valores">
        <div className="sobre-valores-bg">
          <div className="valores-bg-circle"></div>
        </div>
        
        <div className="container">
          <div className="valores-header">
            <span className="section-label section-label-light">O que nos define</span>
            <h2 className="valores-titulo">Nossos Pilares</h2>
            <div className="valores-header-line"></div>
          </div>
          
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="24"/>
                  <path d="M32 16v32M16 32h32"/>
                  <circle cx="32" cy="32" r="8"/>
                </svg>
              </div>
              <h3 className="valor-titulo">Tradição</h3>
              <div className="valor-linha"></div>
              <p className="valor-texto">
                47 anos de conhecimento transmitido de geração em geração. 
                A sabedoria do passado guiando as mãos do presente.
              </p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 8l6 18h18l-14 11 5 19-15-12-15 12 5-19-14-11h18z"/>
                </svg>
              </div>
              <h3 className="valor-titulo">Exclusividade</h3>
              <div className="valor-linha"></div>
              <p className="valor-texto">
                Cada joia é única. Nenhuma criação é repetida. 
                O que fazemos para você existe apenas para você.
              </p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 56c-8-6-20-15-20-28a12 12 0 0124 0 12 12 0 0124 0c0 13-12 22-20 28z"/>
                </svg>
              </div>
              <h3 className="valor-titulo">Emoção</h3>
              <div className="valor-linha"></div>
              <p className="valor-texto">
                Transformamos sentimentos em formas tangíveis. 
                Cada peça carrega a alma de quem a sonhou.
              </p>
            </div>
            
            <div className="valor-card">
              <div className="valor-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 44c-4-2-8-8-8-16 0-10 10-18 20-18s20 8 20 18c0 8-4 14-8 16"/>
                  <path d="M24 44v8c0 4 4 6 8 6s8-2 8-6v-8"/>
                  <path d="M24 48h16M24 52h16"/>
                </svg>
              </div>
              <h3 className="valor-titulo">Artesania</h3>
              <div className="valor-linha"></div>
              <p className="valor-texto">
                O fazer manual como expressão de respeito e cuidado. 
                Cada detalhe é pensado, cada gesto é intencional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          O ATELIÊ
          ================================================ */}
      <section className="sobre-atelie">
        <div className="container">
          <div className="atelie-header">
            <span className="section-label">Nosso Espaço</span>
            <h2 className="atelie-titulo">
              Um ateliê pensado para<br/>
              <em>acolher e criar.</em>
            </h2>
            <p className="atelie-subtexto">
              Mais do que uma loja, um espaço de encontro entre sonhos e realidade.
            </p>
          </div>
          
          <div className="atelie-galeria">
            <div className="atelie-img">
              <img 
                src="/Bancada de trabalho.png" 
                alt="Bancada de trabalho"
                className="atelie-foto"
              />
            </div>
            <div className="atelie-img">
              <img 
                src="/Área de atendimento.png" 
                alt="Área de atendimento"
                className="atelie-foto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          FRASE-CHAVE FINAL
          ================================================ */}
      <section className="sobre-frase-final">
        <div className="frase-final-bg">
          <div className="frase-final-glow"></div>
        </div>
        
        <div className="container">
          <div className="frase-final-content">
            <div className="frase-final-aspas">"</div>
            <blockquote className="frase-final-texto">
              O cliente não precisa saber o que quer.<br/>
              <em>Nós descobrimos com ele.</em>
            </blockquote>
            <div className="frase-final-ornamento">
              <span></span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"/>
              </svg>
              <span></span>
            </div>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="frase-final-cta"
            >
              <span>Vamos conversar?</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SobreNos
