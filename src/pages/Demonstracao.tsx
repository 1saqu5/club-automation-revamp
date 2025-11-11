import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Demonstracao = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar
          </Button>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              Vídeo Demonstração
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Veja Como Funciona a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 mt-2">
                Automação Residencial
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como é simples transformar sua casa em um ambiente
              inteligente, confortável e eficiente com nossas soluções de
              automação.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-secondary/20 backdrop-blur-sm border border-border">
              {/* Video Aspect Ratio Container */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Demonstração de Automação Residencial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                O que você vai aprender neste vídeo:
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Como configurar dispositivos inteligentes em sua casa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integração com assistentes de voz (Alexa, Google Assistant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Criação de rotinas e automações personalizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Controle remoto de todos os dispositivos pelo aplicativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dicas de economia de energia e segurança</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pronto para começar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Crie seu projeto personalizado de automação residencial agora mesmo
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Criar Meu Projeto
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demonstracao;
