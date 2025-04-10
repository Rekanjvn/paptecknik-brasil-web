
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import ServicesSummary from "@/components/home/ServicesSummary";
import AboutSummary from "@/components/home/AboutSummary";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <ServicesSummary />
      <AboutSummary />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
