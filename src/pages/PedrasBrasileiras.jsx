import { Link } from 'react-router-dom'
import './PedrasBrasileiras.css'

function PedrasBrasileiras() {
  const pedras = [
    {
      id: 1,
      nome: 'Quartzo Rosa',
      energia: 'Energia do amor, afeto e cura emocional.',
      descricao: 'A pedra do amor incondicional. Suaviza o coração, atrai harmonia nos relacionamentos e promove o autocuidado. Ideal para quem busca cura emocional e conexão afetiva.',
      cor: '#F4C2C2'
    },
    {
      id: 2,
      nome: 'Ametista',
      energia: 'Clareza mental, espiritualidade e proteção.',
      descricao: 'Conecta o espiritual ao terreno. Traz paz interior, intuição aguçada e proteção energética. Uma pedra para quem busca equilíbrio entre razão e intuição.',
      cor: '#9966CC'
    },
    {
      id: 3,
      nome: 'Citrino',
      energia: 'Prosperidade, criatividade e vitalidade.',
      descricao: 'A pedra do sol. Atrai abundância, estimula a criatividade e renova as energias. Perfeita para novos começos e manifestação de desejos.',
      cor: '#E4A010'
    },
    {
      id: 4,
      nome: 'Ônix',
      energia: 'Força, proteção e estabilidade emocional.',
      descricao: 'O guardião silencioso. Oferece proteção contra energias negativas, fortalece a determinação e promove estabilidade em momentos de mudança.',
      cor: '#353839'
    },
    {
      id: 5,
      nome: 'Água-marinha',
      energia: 'Calma, comunicação e equilíbrio.',
      descricao: 'A essência do mar em forma de cristal. Acalma a mente, facilita a expressão verdadeira e traz serenidade. Para quem busca paz e clareza.',
      cor: '#7FFFD4'
    }
  ]

  return (
    <div className="page pedras-brasileiras">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Pedras Brasileiras & Energéticas</h1>
          <p className="subtitle">Cada pedra carrega uma intenção</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-lg">
        <div className="container container-narrow text-center">
          <p className="pedras-intro">
            As pedras brasileiras são tesouros da terra. 
            Cada uma carrega milhões de anos de formação e uma energia única. 
            Na Alquimia do Ouro, selecionamos pedras não apenas pela beleza, 
            mas pelo significado que podem trazer à sua joia.
          </p>
        </div>
      </section>

      {/* Lista de Pedras */}
      <section className="section pedras-lista">
        <div className="container">
          {pedras.map((pedra, index) => (
            <div 
              key={pedra.id} 
              className={`pedra-item ${index % 2 !== 0 ? 'pedra-item-reverse' : ''}`}
            >
              <div className="pedra-imagem">
                <div 
                  className="image-placeholder pedra-placeholder"
                  style={{ background: `linear-gradient(135deg, ${pedra.cor}40, var(--verde-musgo))` }}
                >
                  <span>Imagem IA: {pedra.nome}</span>
                </div>
              </div>
              <div className="pedra-conteudo">
                <h2>{pedra.nome}</h2>
                <p className="pedra-energia">{pedra.energia}</p>
                <div className="divider"></div>
                <p className="pedra-descricao">{pedra.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-lg pedras-cta bg-verde text-center">
        <div className="container container-narrow">
          <h2>Descubra qual pedra ressoa com você.</h2>
          <p>
            Em uma conversa, ajudamos você a encontrar a pedra perfeita 
            para sua história e intenção.
          </p>
          <div className="pedras-cta-buttons">
            <a 
              href="https://wa.me/5515999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Falar sobre pedras
            </a>
            <Link to="/joias-personalizadas" className="btn btn-outline btn-outline-light">
              Criar uma joia
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PedrasBrasileiras
