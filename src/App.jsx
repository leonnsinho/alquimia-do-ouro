import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import JoiasPersonalizadas from './pages/JoiasPersonalizadas'
import Portfolio from './pages/Portfolio'
import PedrasBrasileiras from './pages/PedrasBrasileiras'
import VintageRestauracao from './pages/VintageRestauracao'
import AliancasPersonalizadas from './pages/AliancasPersonalizadas'
import Contato from './pages/Contato'
import './styles/App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/joias-personalizadas" element={<JoiasPersonalizadas />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pedras-brasileiras" element={<PedrasBrasileiras />} />
            <Route path="/vintage-restauracao" element={<VintageRestauracao />} />
            <Route path="/aliancas-personalizadas" element={<AliancasPersonalizadas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
