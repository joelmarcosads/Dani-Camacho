import { MapPin, Phone } from 'lucide-react';
import { heroData } from './data';
import { useGeoLocation } from './hooks/useGeoLocation';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

export default function App() {
  const city = useGeoLocation("Itaboraí");

  return (
    <div className="min-h-screen antialiased bg-pearl-100 font-sans selection:bg-brand-600/30 selection:text-brand-900">
      
      {/* App Header */}
      <header className="sticky top-0 z-40 bg-pearl-50/90 backdrop-blur-md border-b border-pearl-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-between">
          <Link to="/" className="font-serif font-bold text-2xl lg:text-3xl tracking-normal text-brand-900 flex items-center gap-1">
            Daniele<span className="text-brand-800 italic">Camacho</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-brand-900">
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-800" strokeWidth={2} />
              <span className="uppercase tracking-[0.1em] text-xs font-semibold">
                {city === "Itaboraí" ? "Itaboraí - RJ" : city}
              </span>
            </div>
            <a 
              href={`https://wa.me/${heroData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-whatsapp hover:bg-whatsapp-hover px-5 py-2.5 transition-colors uppercase tracking-widest text-xs font-bold rounded-full shadow-sm"
            >
              <Phone className="w-4 h-4" />
              {heroData.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* Main Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<Privacy />} />
        <Route path="/termos-de-uso" element={<Terms />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-brand-900 text-pearl-200 py-20 text-center border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="font-serif text-3xl font-bold mb-6 text-brand-600">
            Daniele Camacho
          </div>
          
          <address className="flex flex-col items-center gap-2 mb-8 opacity-80 text-sm font-light not-italic">
            <p>Rua Américo Correia da Silva, Casa 33, Bairro: Três Pontes</p>
            <p>Itaboraí - RJ | CEP 24809-258</p>
          </address>

          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm opacity-80 font-light underline-offset-4" aria-label="Links úteis do rodapé">
            <Link to="/politica-de-privacidade" className="hover:text-brand-600 hover:underline transition-colors" title="Leia nossa Política de Privacidade">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-brand-600 hover:underline transition-colors" title="Leia nossos Termos de Uso">
              Termos de Uso
            </Link>
          </nav>

          <p className="font-light tracking-wide text-xs mb-2 opacity-60">
            © {new Date().getFullYear()} Massoterapia & Ventosas Premium. Todos os direitos reservados.
          </p>
          <p className="text-brand-800/80 text-[10px] mt-10 tracking-widest uppercase">
            Página desenvolvida por: <a href="https://marketlocal.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors underline underline-offset-2" title="Agência Market Local Digital - Criação de Sites e SEO">Agência Market Local Digital</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
