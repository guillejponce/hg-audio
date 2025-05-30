import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import SectionMeta from './components/SectionMeta'

function App() {
  return (
    <Router>
      <div className="app">
        <SectionMeta />
        <Loading />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Home section="products" />} />
            <Route path="/equipos" element={<Home section="products" />} />
            <Route path="/eventos" element={<Home section="events" />} />
            <Route path="/testimonios" element={<Home section="testimonials" />} />
            <Route path="/nosotros" element={<Home section="about" />} />
            <Route path="/contacto" element={<Home section="contact" />} />
            <Route path="/pago" element={<Home section="payment" />} />
            <Route path="/terminos" element={<Home section="terms" />} />
            <Route path="/video" element={<Home section="video-showcase" />} />
            <Route path="/proceso" element={<Home section="process" />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 