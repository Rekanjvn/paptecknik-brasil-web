
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const Privacidade = () => {
  return (
    <Layout>
      <PageHeader
        title="Política de Privacidade"
        subtitle="Informações sobre como coletamos, usamos e protegemos seus dados"
      />
      
      <section className="section">
        <div className="content-container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Introdução</h2>
            <p>
              A Paptecknik Brasil ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas 
              informações quando você visita nosso site ou utiliza nossos serviços.
            </p>
            <p>
              Ao acessar nosso site e utilizar nossos serviços, você concorda com as práticas descritas 
              nesta política. Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) 
              do Brasil.
            </p>
            
            <h2>Informações que Coletamos</h2>
            <p>Podemos coletar os seguintes tipos de informações:</p>
            <h3>Informações Pessoais</h3>
            <p>
              Ao preencher formulários em nosso site, podemos coletar seu nome, endereço de e-mail, 
              número de telefone, endereço e outras informações que você fornecer voluntariamente.
            </p>
            <h3>Informações de Uso</h3>
            <p>
              Coletamos automaticamente informações sobre como você interage com nosso site, 
              incluindo o tipo de navegador, endereço IP, páginas visitadas, tempo gasto no site 
              e outros dados estatísticos.
            </p>
            <h3>Cookies e Tecnologias Semelhantes</h3>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário, 
              analisar padrões de tráfego e personalizar conteúdo. Você pode configurar seu navegador 
              para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>
            
            <h2>Como Utilizamos Suas Informações</h2>
            <p>Utilizamos as informações coletadas para os seguintes fins:</p>
            <ul>
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar transações e enviar informações relacionadas</li>
              <li>Responder a suas perguntas e solicitações</li>
              <li>Enviar atualizações, materiais promocionais e outras informações que possam ser de seu interesse</li>
              <li>Analisar tendências e melhorar a experiência do usuário</li>
              <li>Prevenir atividades fraudulentas e garantir a segurança de nosso site</li>
            </ul>
            
            <h2>Compartilhamento de Informações</h2>
            <p>Podemos compartilhar suas informações nas seguintes circunstâncias:</p>
            <ul>
              <li>Com prestadores de serviços terceirizados que nos auxiliam em nossas operações comerciais</li>
              <li>Para cumprir obrigações legais, incluindo responder a intimações, ordens judiciais ou processos legais</li>
              <li>Para proteger nossos direitos, propriedade ou segurança, bem como a de nossos usuários ou outros</li>
              <li>Em conexão com uma fusão, venda de ativos da empresa ou aquisição</li>
            </ul>
            <p>
              Não vendemos, alugamos ou comercializamos suas informações pessoais para terceiros 
              sem o seu consentimento expresso.
            </p>
            
            <h2>Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas 
              informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, 
              nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não 
              podemos garantir segurança absoluta.
            </p>
            
            <h2>Seus Direitos</h2>
            <p>De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul>
              <li>Direito de acesso aos seus dados</li>
              <li>Direito de retificação de dados incompletos, inexatos ou desatualizados</li>
              <li>Direito à exclusão de dados desnecessários ou excessivos</li>
              <li>Direito de se opor ao tratamento de dados</li>
              <li>Direito à portabilidade dos dados</li>
              <li>Direito de revogar o consentimento</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato conosco através dos canais informados 
              no final desta política.
            </p>
            
            <h2>Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades 
              descritas nesta política, a menos que um período de retenção mais longo seja exigido 
              ou permitido por lei.
            </p>
            
            <h2>Alterações nesta Política</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. A versão mais recente 
              estará sempre disponível em nosso site, com a data da última atualização. Recomendamos 
              que você revise esta política regularmente.
            </p>
            
            <h2>Contato</h2>
            <p>
              Se você tiver alguma dúvida, preocupação ou solicitação relacionada à nossa Política de 
              Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <ul>
              <li>E-mail: privacidade@paptecknik.com</li>
              <li>Telefone: (11) 9999-9999</li>
              <li>Endereço: Av. Paulista, 1000, São Paulo - SP, 01310-000</li>
            </ul>
            
            <p>
              <strong>Data da última atualização:</strong> 10 de abril de 2025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidade;
