
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-paptecknik-blue to-paptecknik-blue/90 text-white py-20">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de soluções para validação predial?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Entre em contato com nossa equipe de especialistas para uma avaliação personalizada 
            e um orçamento sem compromisso para o seu projeto.
          </p>
          <Button asChild size="lg" className="bg-paptecknik-yellow hover:bg-paptecknik-yellow/90 text-black">
            <Link to="/contato" className="flex items-center">
              Solicite um Orçamento <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
