
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { CheckCircle2, Award, Users, Building } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Excelência",
      description: "Comprometimento com os mais altos padrões de qualidade em todos os serviços prestados."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Integridade",
      description: "Conduta ética e transparente em todas as relações profissionais e comerciais."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Colaboração",
      description: "Trabalho em equipe para desenvolver as melhores soluções para nossos clientes."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Compromisso",
      description: "Foco em resultados e na satisfação plena dos clientes, cumprindo prazos e requisitos."
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Sobre a Paptecknik"
        subtitle="Conheça nossa trajetória e compromisso com a excelência em validação predial"
        backgroundImage="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* História da Empresa */}
      <section className="section">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Fundada em 2005, a Paptecknik Brasil iniciou suas atividades focada em serviços de 
                  consultoria técnica para pequenas edificações. Com o crescimento da demanda por 
                  serviços especializados em validação predial, a empresa expandiu sua atuação e 
                  equipe técnica.
                </p>
                <p className="text-gray-700">
                  Ao longo dos anos, consolidamos nossa posição como referência no mercado de 
                  validação de sistemas prediais, atendendo a clientes de diversos setores, como 
                  condomínios residenciais e comerciais, hospitais, indústrias e instituições públicas.
                </p>
                <p className="text-gray-700">
                  Nosso comprometimento com a qualidade e a excelência técnica nos permitiu crescer 
                  de forma sustentável, expandindo nossa presença para diversas regiões do Brasil e 
                  ampliando continuamente nosso portfólio de serviços.
                </p>
                <p className="text-gray-700">
                  Hoje, contamos com uma equipe multidisciplinar de engenheiros, arquitetos e 
                  técnicos especializados, prontos para oferecer soluções customizadas para os mais 
                  diversos desafios na área de validação predial.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="História da Paptecknik" 
                  className="w-full object-cover"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-3xl text-paptecknik-green">15+</p>
                <p className="text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Missão, Visão e Valores */}
      <section className="section bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Missão, Visão e Valores</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-paptecknik-green">
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-700">
                Oferecer soluções técnicas de excelência em validação predial, garantindo a segurança 
                e conformidade das edificações, com foco na satisfação dos clientes e no desenvolvimento 
                sustentável.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-paptecknik-yellow">
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como empresa líder em soluções técnicas para validação predial no Brasil, 
                referência em qualidade, inovação e compromisso com a segurança e sustentabilidade das 
                edificações.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-paptecknik-blue">
              <h3 className="text-xl font-bold mb-4">Propósito</h3>
              <p className="text-gray-700">
                Contribuir para a segurança e qualidade do ambiente construído, por meio de serviços 
                técnicos que promovam a conformidade, eficiência e sustentabilidade das edificações.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-paptecknik-green/10 text-paptecknik-green">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-center text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipe Técnica */}
      <section className="section">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe Técnica</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos com profissionais qualificados e experientes, prontos para 
              atender às necessidades específicas de cada projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Membros da Equipe */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Engenheiro Civil" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1">Roberto Alves</h4>
                <p className="text-sm text-gray-500 mb-2">Engenheiro Civil, Diretor Técnico</p>
                <p className="text-gray-700 text-sm">
                  Especialista em estruturas e sistemas prediais com mais de 20 anos de experiência.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Arquiteta" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1">Carla Mendonça</h4>
                <p className="text-sm text-gray-500 mb-2">Arquiteta, Coordenadora de Projetos</p>
                <p className="text-gray-700 text-sm">
                  Especializada em avaliação de conformidade e acessibilidade em edificações.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Engenheiro Elétrico" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1">Marcos Oliveira</h4>
                <p className="text-sm text-gray-500 mb-2">Engenheiro Elétrico</p>
                <p className="text-gray-700 text-sm">
                  Especialista em sistemas elétricos e de automação predial.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Engenheira Ambiental" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1">Juliana Costa</h4>
                <p className="text-sm text-gray-500 mb-2">Engenheira Ambiental</p>
                <p className="text-gray-700 text-sm">
                  Especialista em avaliação de impacto ambiental e certificações sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
