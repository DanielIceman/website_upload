import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { Services } from "@/components/Services";
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Values />
        <Services />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
