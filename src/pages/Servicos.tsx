
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ClipboardCheck, Search, FileCheck, Lightbulb, 
  Wrench, Gauge, FileSpreadsheet, Shield 
} from "lucide-react";

const Servicos = () => {
  const servicosDetalhados = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Validação de Sistemas Prediais",
      description: "Análise técnica completa dos sistemas prediais para garantir sua conformidade com normas técnicas, legislações e requisitos específicos do cliente.",
      items: [
        "Validação de sistemas elétricos",
        "Validação de sistemas hidráulicos",
        "Validação de sistemas de climatização",
        "Validação de sistemas de segurança"
      ],
      link: "/servicos/validacao-predial"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Inspeções Técnicas",
      description: "Vistorias detalhadas para identificar problemas estruturais, elétricos, hidráulicos e de acabamentos em edificações existentes ou em construção.",
      items: [
        "Inspeções prediais periódicas",
        "Vistorias para entrega de obra",
        "Inspeções para compra e venda de imóveis",
        "Vistorias cautelares em vizinhança"
      ],
      link: "/servicos/inspecoes-tecnicas"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Emissão de Laudos",
      description: "Elaboração de relatórios técnicos detalhados sobre as condições das edificações, com recomendações e orientações específicas para cada caso.",
      items: [
        "Laudos técnicos de vistoria",
        "Laudos de inspeção predial",
        "Pareceres técnicos",
        "Auto de vistoria (AVCB)"
      ],
      link: "/servicos/laudos"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Consultoria Técnica",
      description: "Assessoria especializada em todas as etapas do ciclo de vida das edificações, desde a concepção até a manutenção e reformas.",
      items: [
        "Consultoria em projetos",
        "Assessoria técnica em reformas",
        "Consultoria em eficiência energética",
        "Planos de manutenção preventiva"
      ],
      link: "/servicos/consultoria"
    }
  ];

  const servicosAdicionais = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Manutenção Predial",
      description: "Planos de manutenção preventiva e corretiva para sistemas prediais, visando prolongar sua vida útil e garantir seu funcionamento adequado."
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Eficiência Energética",
      description: "Avaliação e implementação de soluções para redução do consumo de energia e otimização dos sistemas prediais."
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: "Regularização Documental",
      description: "Assessoria na obtenção de documentações, licenças, alvarás e certificações necessárias para a operação legal das edificações."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Avaliação de Riscos",
      description: "Identificação e análise de riscos técnicos em edificações, com propostas de medidas mitigatórias e preventivas."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Nossos Serviços"
        subtitle="Soluções técnicas completas para validação e conformidade de sistemas prediais"
        backgroundImage="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Serviços Principais */}
      <section className="section">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Serviços Especializados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de soluções técnicas para garantir a conformidade,
              segurança e eficiência das edificações.
            </p>
          </div>
          
          <div className="space-y-16">
            {servicosDetalhados.map((servico, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-lg bg-paptecknik-green/10 text-paptecknik-green">
                      {servico.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{servico.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{servico.description}</p>
                  <ul className="space-y-2 mb-6">
                    {servico.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-paptecknik-green mr-2">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-paptecknik-green hover:bg-paptecknik-green/90">
                    <Link to={servico.link}>Saiba Mais</Link>
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1581094487431-baecfcc45c52' : '1504328345578-18a4dae84a22'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`} 
                    alt={servico.title} 
                    className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Serviços Adicionais */}
      <section className="section bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serviços Complementares</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Além dos nossos serviços principais, oferecemos soluções complementares para atender 
              às necessidades específicas dos nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosAdicionais.map((servico, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 p-3 rounded-lg bg-paptecknik-green/10 text-paptecknik-green">
                  {servico.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{servico.title}</h3>
                  <p className="text-gray-600">{servico.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-to-r from-paptecknik-green to-paptecknik-green/90 text-white py-20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de soluções personalizadas para sua edificação?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Entre em contato com nossa equipe e receba uma avaliação detalhada 
              sobre as necessidades específicas do seu projeto.
            </p>
            <Button asChild size="lg" className="bg-paptecknik-yellow hover:bg-paptecknik-yellow/90 text-black">
              <Link to="/contato">Solicite um Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
