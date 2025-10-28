import { Button } from "@/components/ui/button";
import { Search, Briefcase } from "lucide-react";

export const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[linear-gradient(135deg,_hsl(207_80%_25%)_0%,_hsl(220_50%_20%)_100%)] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up">
          Ready to Start?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 min-w-[280px]"
            onClick={scrollToContact}
          >
            <Search className="mr-2 h-5 w-5" />
            Find Your Next Job
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white hover:text-primary-dark border-2 border-white backdrop-blur-sm text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 min-w-[280px]"
            onClick={scrollToContact}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Hire Qualified Workers
          </Button>
        </div>
        
        <p className="text-lg text-white/90">
          Our multilingual team will respond within 48 hours.
        </p>
      </div>
    </section>
  );
};
