
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contato = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      info: "(11) 9999-9999",
      action: "tel:+551199999999"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "E-mail",
      info: "contato@paptecknik.com",
      action: "mailto:contato@paptecknik.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      info: "Av. Paulista, 1000, São Paulo - SP, 01310-000",
      action: "https://goo.gl/maps/5Uj4oNvLGJmzuPJU6"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário",
      info: "Segunda a Sexta: 8:00 - 18:00",
      action: "#"
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Entre em Contato"
        subtitle="Estamos prontos para atender às suas necessidades e responder suas dúvidas"
        backgroundImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="section">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário de Contato */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              <ContactForm />
            </div>
            
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="flex items-start p-6">
                      <div className="mr-4 p-2 rounded-full bg-paptecknik-green/10 text-paptecknik-green">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <a 
                          href={item.action} 
                          className={`text-gray-600 ${item.action !== "#" ? "hover:text-paptecknik-green" : ""}`}
                          target={item.action.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                        >
                          {item.info}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-paptecknik-green hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-paptecknik-green hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-paptecknik-green hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="mb-16">
        <div className="content-container">
          <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe 
              title="Localização Paptecknik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0988244398676!2d-46.65498872359202!3d-23.56518066073434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1701359921649!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
