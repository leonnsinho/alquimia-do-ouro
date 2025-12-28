import './AliancasPersonalizadas.css'

function AliancasPersonalizadas() {
  const whatsappUrl = 'https://wa.me/5515999999999?text=' + encodeURIComponent('Olá! Gostaríamos de criar alianças personalizadas.')

  const diferenciais = [
    {
      titulo: 'Design Único',
      descricao: 'Criamos um design exclusivo que representa a história do casal.'
    },
    {
      titulo: 'Gravações Especiais',
      descricao: 'Datas, nomes, frases ou símbolos que só vocês entendem.'
    },
    {
      titulo: 'Escolha de Materiais',
      descricao: 'Ouro amarelo, rosé, branco ou combinações personalizadas.'
    },
    {
      titulo: 'Pedras Significativas',
      descricao: 'Incorporamos pedras com energias especiais, se desejarem.'
    }
  ]

  return (
    <div className="page aliancas-personalizadas">
      
      {/* ================================================
          HERO - ALIANÇAS PERSONALIZADAS
          ================================================ */}
      <section className="aliancas-hero">
        <div className="aliancas-hero-bg">
          <div className="aliancas-hero-gradient"></div>
          <div className="aliancas-hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="aliancas-hero-content">
            <h1 className="aliancas-hero-title">
              Alianças <em>Personalizadas</em>
            </h1>
            <p className="aliancas-hero-texto">
              Histórias de amor eternizadas em ouro. Criamos alianças que representam
              jornadas únicas — porque cada casal merece algo irrepetível.
            </p>
          </div>
        </div>
      </section>

      {/* Imagem destaque */}}
      <section className="section aliancas-destaque">
        <div className="container">
          <div className="destaque-grid">
            <div className="destaque-imagem">
              <img src="/Alianças.png" alt="Par de alianças personalizadas" />
            </div>
            <div className="destaque-texto">
              <h2>Mais que um símbolo. Uma extensão da história de vocês.</h2>
              <p>
                Uma aliança não é apenas um anel. É a materialização de uma promessa, 
                de uma jornada compartilhada, de um amor que escolhe permanecer.
              </p>
              <p>
                Na Alquimia do Ouro, cada par de alianças é criado do zero. 
                Não trabalhamos com modelos prontos. Ouvimos a história do casal 
                e traduzimos esse amor em forma, textura e detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section-lg aliancas-diferenciais bg-off-white-quente">
        <div className="container">
          <h2 className="text-center">O Que Oferecemos</h2>
          <div className="divider divider-center"></div>
          
          <div className="diferenciais-grid">
            {diferenciais.map((item, index) => (
              <div key={index} className="diferencial-card">
                <span className="diferencial-numero">0{index + 1}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg aliancas-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Prontos para criar as alianças de vocês?</h2>
          <p>
            Cada história de amor merece um símbolo à altura. 
            Vamos criar juntos.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Criar nossas alianças
          </a>
        </div>
      </section>
    </div>
  )
}

export default AliancasPersonalizadas
