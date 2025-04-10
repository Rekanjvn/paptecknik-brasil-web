
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Paptecknik realizou um trabalho excepcional na validação dos sistemas do nosso edifício comercial. O relatório detalhado nos ajudou a resolver problemas que não havíamos identificado anteriormente.",
      author: "Carlos Mendes",
      role: "Gerente de Facilities",
      company: "Edifício Empresarial Plaza",
      rating: 5,
    },
    {
      quote: "Profissionais extremamente capacitados e atenciosos. O laudo técnico foi fundamental para regularizarmos nossa situação junto aos órgãos competentes.",
      author: "Mariana Silva",
      role: "Síndica",
      company: "Condomínio Parque das Flores",
      rating: 5,
    },
    {
      quote: "A consultoria da Paptecknik nos permitiu economizar recursos significativos em nossa reforma, identificando prioridades e soluções eficientes.",
      author: "Roberto Almeida",
      role: "Diretor",
      company: "Construtora Horizonte",
      rating: 4,
    },
    {
      quote: "As inspeções periódicas realizadas pela equipe da Paptecknik garantem a tranquilidade e segurança de todos os moradores do nosso condomínio.",
      author: "Patrícia Campos",
      role: "Administradora",
      company: "Residencial Parque Verde",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="section bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação de nossos clientes é o melhor testemunho da qualidade dos nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              className="mr-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(index)}
                className="mx-1 h-8 w-8"
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              className="ml-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
