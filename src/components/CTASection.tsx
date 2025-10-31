import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import devicesImage from "@/assets/devices-collage.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Comece Gratuitamente
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Pronto para Transformar
              <span className="block text-cyan-300">Sua Casa?</span>
            </h2>

            <p className="text-lg text-white/90 leading-relaxed">
              Crie seu projeto personalizado agora mesmo. É rápido, fácil e você
              não precisa ser especialista em tecnologia. Nossa plataforma guia
              você em cada etapa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-secondary hover:bg-cyan-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Criar Projeto Gratuito
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300"
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-cyan-300">500+</div>
                <div className="text-sm text-white/80">Casas Automatizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300">4.9/5</div>
                <div className="text-sm text-white/80">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300">95%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in lg:animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={devicesImage}
                alt="Smart Home Devices"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-300 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
