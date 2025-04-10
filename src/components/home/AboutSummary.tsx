
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const AboutSummary = () => {
  const benefits = [
    "Equipe técnica altamente especializada",
    "Relatórios detalhados e documentação completa",
    "Conformidade com normas e legislações vigentes",
    "Soluções personalizadas para cada tipo de edificação"
  ];

  return (
    <section className="section">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Sobre a Paptecknik Brasil</h2>
            <p className="text-lg text-gray-600 mb-6">
              Há mais de 15 anos atuando no mercado brasileiro, a Paptecknik é referência em soluções 
              técnicas para validação predial, garantindo segurança e conformidade para empreendimentos 
              de todos os portes.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-paptecknik-green mr-3 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-paptecknik-green hover:bg-paptecknik-green/90">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Equipe Paptecknik em ação" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-paptecknik-yellow p-6 rounded-lg shadow-lg">
                <p className="font-bold text-xl">+1500</p>
                <p className="text-sm">Projetos Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
