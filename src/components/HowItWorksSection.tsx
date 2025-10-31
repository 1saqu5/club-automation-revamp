import { ClipboardList, Wrench, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Planeje seu Projeto",
    description:
      "Responda algumas perguntas sobre sua casa e preferências para criar um projeto personalizado.",
  },
  {
    icon: Wrench,
    title: "2. Escolha os Dispositivos",
    description:
      "Selecionamos os melhores produtos compatíveis baseados no seu projeto e orçamento.",
  },
  {
    icon: Home,
    title: "3. Instalação Simplificada",
    description:
      "Guias passo a passo ou contrate especialistas certificados para instalação profissional.",
  },
  {
    icon: CheckCircle,
    title: "4. Aproveite sua Casa Inteligente",
    description:
      "Controle tudo pelo app, crie automações e desfrute de mais conforto e economia.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Como Funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            Em 4 passos simples, você terá sua casa totalmente automatizada e
            inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto animate-glow-pulse">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
