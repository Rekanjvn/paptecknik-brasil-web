
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-paptecknik-yellow">Paptecknik</h3>
            <p className="text-gray-300 mb-4">
              Soluções Técnicas em Validação Predial com excelência e compromisso. 
              Garantimos segurança e conformidade para seu empreendimento.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-paptecknik-yellow">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Nossos Serviços</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Contato</Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Política de Privacidade</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-paptecknik-yellow">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/validacao-predial" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Validação de Sistemas Prediais</Link>
              </li>
              <li>
                <Link to="/servicos/inspecoes-tecnicas" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Inspeções Técnicas</Link>
              </li>
              <li>
                <Link to="/servicos/laudos" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Emissão de Laudos</Link>
              </li>
              <li>
                <Link to="/servicos/consultoria" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">Consultoria Técnica</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-paptecknik-yellow">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-paptecknik-yellow mt-1" />
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo - SP, 01310-000</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-paptecknik-yellow" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-paptecknik-yellow" />
                <a href="mailto:contato@paptecknik.com" className="text-gray-300 hover:text-paptecknik-yellow transition-colors">contato@paptecknik.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-paptecknik-yellow" />
                <span className="text-gray-300">Seg - Sex: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Paptecknik Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
