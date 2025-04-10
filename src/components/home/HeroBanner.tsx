
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-paptecknik-blue via-paptecknik-blue to-paptecknik-blue/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582586146604-4fa45b3130cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="content-container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções Técnicas em Validação Predial com Excelência
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Garantimos conformidade e segurança para o seu empreendimento com análises técnicas precisas e laudos completos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-paptecknik-green hover:bg-paptecknik-green/90 text-white font-medium px-8">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
