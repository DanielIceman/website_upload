import { CheckCircle2, Clock, Globe, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CheckCircle2,
    title: "Recruitment & Vetting",
    description: "We conduct thorough background checks and verify all qualifications to ensure the best candidates.",
    features: [
      "Full screening within 3-5 business days",
      "Verified work history and references",
      "Skills assessment and evaluation",
    ],
  },
  {
    icon: Clock,
    title: "Temporary Staffing",
    description: "Flexible staffing solutions with quick deployment to meet your immediate workforce needs.",
    features: [
      "Deployment in as little as 48 hours",
      "No hidden costs or long-term contracts",
      "Scalable workforce solutions",
    ],
  },
  {
    icon: Globe,
    title: "Relocation & Support",
    description: "Comprehensive support for international workers, from visa processing to housing arrangements.",
    features: [
      "End-to-end visa and permit assistance",
      "Housing and local orientation included",
      "Ongoing integration support",
    ],
  },
  {
    icon: FileText,
    title: "Compliance & Payroll",
    description: "Full administrative support ensuring 100% compliance with all local regulations and tax requirements.",
    features: [
      "100% compliance with local regulations",
      "Full payroll and tax administration",
      "Regular reporting and documentation",
    ],
  },
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="py-20 md:py-28 relative"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.92) 100%), url(https://i.postimg.cc/zGW74FkF/windraeder.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur-sm border-2 hover:border-primary"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            onClick={scrollToContact}
          >
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};
