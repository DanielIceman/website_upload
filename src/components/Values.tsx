import { Target, MessageCircle, Scale, Sprout } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Quality Over Quantity",
    description: "Every candidate is carefully vetted, every company thoroughly assessed. We focus on perfect matches, not volume.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "No hidden fees. No vague timelines. No surprises. We tell you exactly what to expect at every stage.",
  },
  {
    icon: Scale,
    title: "Fairness First",
    description: "We exclusively partner with employers who respect labor rights and provide fair wages to all workers.",
  },
  {
    icon: Sprout,
    title: "Built for the Long Term",
    description: "We focus on sustainable matches that benefit both workers and companies for years to come.",
  },
];

export const Values = () => {
  return (
    <section className="py-20 md:py-28 bg-[linear-gradient(to_bottom,_hsl(210_40%_98%)_0%,_hsl(0_0%_100%)_100%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Values & Commitment
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Arctic Workforce was founded in 2025 with a clear mission: to build a recruitment company that does things differently. 
            We believe that fair, transparent workforce solutions are not just good ethics – they're good business.
          </p>
          <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-foreground">
              <strong className="text-xl font-bold">We're at the beginning of our journey</strong>
              <span className="text-muted-foreground"> – and that's exactly what drives us to give every client and candidate our full attention. 
              We know that trust must be earned, not claimed.</span>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
