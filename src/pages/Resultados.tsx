import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Zap, Clock, Award } from "lucide-react";

const Resultados = () => {
  const metrics = [
    { icon: Users, value: "500+", label: "Clientes Satisfeitos", color: "text-accent" },
    { icon: Zap, value: "98%", label: "Satisfação", color: "text-primary" },
    { icon: Clock, value: "40%", label: "Economia de Tempo", color: "text-cyan-400" },
    { icon: Award, value: "150+", label: "Projetos Entregues", color: "text-accent" },
  ];

  const results = [
    {
      title: "Automação Completa",
      description: "Sistema integrado controlando iluminação, climatização e segurança",
      impact: "Redução de 35% no consumo de energia",
      features: ["Controle por voz", "Agendamento inteligente", "Sensores de presença", "App mobile"],
    },
    {
      title: "Segurança Avançada",
      description: "Monitoramento 24/7 com câmeras e sensores inteligentes",
      impact: "100% de prevenção de incidentes",
      features: ["Alertas em tempo real", "Reconhecimento facial", "Histórico de eventos", "Backup em nuvem"],
    },
    {
      title: "Eficiência Energética",
      description: "Gestão inteligente de energia com análise de consumo",
      impact: "Economia de R$ 800/mês em média",
      features: ["Relatórios detalhados", "Otimização automática", "Integração solar", "Previsão de gastos"],
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      comment: "A automação transformou minha casa. Controlo tudo pelo celular e economizo muito na conta de luz.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Arquiteta",
      comment: "Projeto impecável! A equipe é altamente profissional e o resultado superou todas as expectativas.",
      rating: 5,
    },
    {
      name: "João Oliveira",
      role: "Médico",
      comment: "Segurança e conforto em um só lugar. Recomendo para todos que buscam modernidade.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              Resultados Comprovados
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up text-gradient">
              Transformando Casas em Lares Inteligentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
              Veja os resultados reais dos nossos projetos de automação residencial e como estamos mudando a vida dos nossos clientes
            </p>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="glass-effect border-primary/10 hover-lift">
                  <CardContent className="pt-6 text-center">
                    <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Details */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Nossos Projetos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Resultados tangíveis que demonstram o poder da automação residencial
              </p>
            </div>

            <div className="space-y-8">
              {results.map((result, index) => (
                <Card key={index} className="glass-effect border-primary/20 hover-lift overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{result.title}</CardTitle>
                        <CardDescription className="text-base">{result.description}</CardDescription>
                      </div>
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        <span>{result.impact}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">O Que Dizem Nossos Clientes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Depoimentos reais de quem já transformou sua casa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass-effect border-primary/10 hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.comment}"</p>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="glass-effect border-primary/20 glow-primary overflow-hidden">
              <CardContent className="p-12 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Pronto Para Transformar Sua Casa?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Junte-se aos nossos clientes satisfeitos e experimente o futuro da automação residencial
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg hover-lift">
                    Começar Meu Projeto
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg hover-lift">
                    Falar com Especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resultados;
