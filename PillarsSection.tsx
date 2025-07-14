import { Lightbulb, Brain, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Jeunesse déterminée",
      subtitle: "La force du changement",
      description: "La jeunesse déterminée à contribuer au changement, à transformer, développer et moderniser le Cameroun. Ce changement passera par une révolution mentale, fondée sur une éthique du travail, la responsabilité individuelle, et la volonté de rompre avec les anciens schémas qui freinent le progrès.",
      gradient: "bg-gradient-hero",
      delay: "0.2s"
    },
    {
      icon: Brain,
      title: "État d'esprit nouveau",
      subtitle: "Refuser la fatalité",
      description: "Un état d'esprit nouveau : celui de toutes les personnes qui estiment que le Cameroun a suffisamment stagné. Celles qui croient que, sans recours à la violence, le pays peut s'élever à un rang bien plus digne parmi les puissances économiques africaines.",
      gradient: "bg-gradient-accent",
      delay: "0.4s"
    },
    {
      icon: RefreshCw,
      title: "Changement de mentalité",
      subtitle: "Révolution des comportements",
      description: "Un appel au changement de mentalité. Il s'agit de créer une masse critique de citoyens révoltés par les maux qui gangrènent notre société : corruption, dénigrement, sabotage, pratiques rétrogrades, manque de civisme et insalubrité culturelle.",
      gradient: "bg-secondary",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-20 flex flex-col gap-10 px-[6%] bg-gradient-to-br from-muted/20 via-background to-primary/5">
        {/* Section Header */}
        <div className="text-center animate-fade-up flex flex-col gap-3">
          <div className="inline-flex w-fit mx-auto items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2">
            <RefreshCw className="w-3 h-3 text-accent" />
            <span className="text-accent text-xs font-semibold">Nos Fondations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Les <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">3 Piliers</span> de l'ANG
          </h2>
          <p className="text-[1rem] md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trois piliers fondamentaux qui guident notre vision d'un 
            <span className="text-primary font-bold"> Cameroun transformé</span> et prospère
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden animate-scale-in bg-white/50 backdrop-blur-sm"
              style={{animationDelay: pillar.delay}}
            >
              <CardHeader className="text-center pb-3 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
                
                {/* Icon with gradient background */}
                <div className={`w-24 h-24 ${pillar.gradient} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                  <pillar.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-primary font-bold text-lg">
                  {pillar.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed text-center text-[1rem] md:text-[1.05rem]">
                  {pillar.description}
                </p>
                
                {/* Decorative elements */}
                <div className="flex justify-center mt-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span>Pilier {index + 1}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 animate-fade-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-foreground mb-1.5">
            Ensemble pour la transformation
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-5">
            Ces trois piliers forment les fondations solides sur lesquelles nous bâtissons 
            un mouvement capable de <span className="text-primary font-semibold">transformer durablement</span> notre pays.
          </p>
          
          {/* Visual elements */}
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span>Révolution mentale</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              <span>État d'esprit nouveau</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span>Changement de mentalité</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default PillarsSection;