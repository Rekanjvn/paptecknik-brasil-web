
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 header-shadow">
      <div className="content-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-paptecknik-blue">
              Paptecknik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-paptecknik-green font-medium transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-paptecknik-green font-medium transition-colors">
              Sobre
            </Link>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-paptecknik-green font-medium transition-colors">
                Serviços <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/servicos/validacao-predial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Validação de Sistemas Prediais
                  </Link>
                  <Link to="/servicos/inspecoes-tecnicas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Inspeções Técnicas
                  </Link>
                  <Link to="/servicos/laudos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Emissão de Laudos
                  </Link>
                  <Link to="/servicos/consultoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Consultoria Técnica
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contato" className="text-foreground hover:text-paptecknik-green font-medium transition-colors">
              Contato
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-paptecknik-green hover:bg-paptecknik-green/90">
              <Link to="/contato">Solicite um Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="content-container py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-paptecknik-green font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="block text-foreground hover:text-paptecknik-green font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <div>
              <p className="text-foreground font-medium py-2">Serviços</p>
              <div className="ml-4 space-y-2 mt-2">
                <Link 
                  to="/servicos/validacao-predial" 
                  className="block text-foreground hover:text-paptecknik-green py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Validação de Sistemas Prediais
                </Link>
                <Link 
                  to="/servicos/inspecoes-tecnicas" 
                  className="block text-foreground hover:text-paptecknik-green py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inspeções Técnicas
                </Link>
                <Link 
                  to="/servicos/laudos" 
                  className="block text-foreground hover:text-paptecknik-green py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Emissão de Laudos
                </Link>
                <Link 
                  to="/servicos/consultoria" 
                  className="block text-foreground hover:text-paptecknik-green py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consultoria Técnica
                </Link>
              </div>
            </div>
            <Link 
              to="/contato" 
              className="block text-foreground hover:text-paptecknik-green font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button asChild variant="default" className="w-full bg-paptecknik-green hover:bg-paptecknik-green/90">
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                Solicite um Orçamento
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
