import {
  Lightbulb,
  Thermometer,
  Shield,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Iluminação Inteligente",
    description:
      "Controle luzes, crie ambientes e economize energia automaticamente.",
  },
  {
    icon: Thermometer,
    title: "Climatização Automática",
    description:
      "Temperatura perfeita em cada ambiente, com economia de energia.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description:
      "Câmeras, sensores e alertas em tempo real para sua tranquilidade.",
  },
  {
    icon: Smartphone,
    title: "Controle por App",
    description:
      "Gerencie tudo pelo celular, de qualquer lugar do mundo.",
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description:
      "Integração com Alexa, Google Home e outros assistentes virtuais.",
  },
  {
    icon: Zap,
    title: "Economia de Energia",
    description:
      "Reduza sua conta de luz com automação inteligente e eficiente.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Recursos da Automação
            <span className="block text-gradient">Residencial</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforme sua casa em um ambiente inteligente, seguro e eficiente
            com tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift border-2 border-transparent hover:border-primary/20 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
