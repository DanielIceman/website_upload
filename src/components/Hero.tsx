import { Button } from "@/components/ui/button";
import { Search, Briefcase, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/ydyJjcqj/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_hsla(207_80%_25%_/_0.95)_0%,_hsla(195_76%_30%_/_0.88)_100%)] z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Empowering Your Workforce
          <br />
          <span className="text-primary-light">Across the North</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed">
          Connecting ambitious workers with leading Nordic companies – ethically, reliably, and with full support every step of the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 min-w-[280px] group"
            onClick={scrollToContact}
          >
            <Search className="mr-2 h-5 w-5" />
            Find Your Next Job
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white hover:text-primary border-2 border-white backdrop-blur-sm text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 min-w-[280px]"
            onClick={scrollToContact}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Hire Qualified Workers
          </Button>
        </div>
      </div>
    </section>
  );
};
