
import { Link } from "react-router-dom";
import { ClipboardCheck, Search, FileCheck, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="service-card hover-lift h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-paptecknik-green/10 text-paptecknik-green">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-paptecknik-green text-paptecknik-green hover:bg-paptecknik-green hover:text-white">
          <Link to={link}>Saiba Mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSummary = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Validação de Sistemas Prediais",
      description: "Avaliação técnica completa dos sistemas prediais para garantir conformidade com normas e regulamentações.",
      link: "/servicos/validacao-predial",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Inspeções Técnicas",
      description: "Inspeções detalhadas para identificar problemas estruturais, elétricos e hidráulicos em edificações.",
      link: "/servicos/inspecoes-tecnicas",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Emissão de Laudos",
      description: "Laudos técnicos detalhados e documentação completa para processos legais e administrativos.",
      link: "/servicos/laudos",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Consultoria Técnica",
      description: "Assessoria especializada para projetos, reformas e manutenção preventiva de edificações.",
      link: "/servicos/consultoria",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para validação e conformidade de sistemas prediais,
            garantindo a segurança e o funcionamento adequado de sua edificação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-paptecknik-green hover:bg-paptecknik-green/90">
            <Link to="/servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
