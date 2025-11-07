import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";

interface ArticleContent {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string[];
}

const articlesContent: Record<number, ArticleContent> = {
  1: {
    id: 1,
    title: "Interruptores e Tomadas Inteligentes: O Futuro da Automação Residencial",
    category: "Produtos",
    date: "3 de agosto de 2023",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    content: [
      "Os interruptores e tomadas inteligentes representam a evolução definitiva no controle residencial, trazendo tecnologia de ponta para o dia a dia das residências modernas. Estes dispositivos inovadores são muito mais do que simples substitutos dos modelos convencionais - eles são verdadeiros centros de controle que transformam completamente a experiência de automação doméstica.",
      
      "## Tecnologias de Comunicação",
      
      "Compatíveis com os principais protocolos de comunicação do mercado - WiFi, Zigbee e Z-Wave - esses dispositivos oferecem flexibilidade total na hora de montar seu ecossistema de automação. O WiFi garante integração direta com sua rede doméstica, enquanto Zigbee e Z-Wave criam malhas robustas e confiáveis, ideais para casas maiores ou com múltiplos dispositivos conectados.",
      
      "## Controle por Voz e Aplicativo",
      
      "A integração com assistentes virtuais revoluciona a forma como interagimos com nossa casa. Através de comandos de voz simples para Alexa, Google Assistant ou Siri, você pode controlar luzes, aparelhos e equipamentos sem precisar levantar um dedo. Diga 'Alexa, apague todas as luzes' ao sair de casa, ou 'Ok Google, acenda a luz da sala' quando chegar com as mãos ocupadas.",
      
      "Pelo smartphone, o controle é igualmente impressionante. De qualquer lugar do mundo, você pode verificar o status de todos os dispositivos, ligar ou desligar aparelhos, ajustar a intensidade das luzes e muito mais. Esqueceu o ferro ligado? Desligue-o remotamente com um toque na tela.",
      
      "## Rotinas Personalizadas e Automação",
      
      "Crie rotinas personalizadas que se adaptam perfeitamente ao seu estilo de vida. Programe as luzes para acenderem gradualmente pela manhã, simulando um nascer do sol natural que facilita o despertar. Configure o desligamento automático de aparelhos esquecidos, eliminando desperdícios e aumentando a segurança da sua casa.",
      
      "## Economia de Energia",
      
      "A economia é um dos grandes atrativos: com agendamentos inteligentes e monitoramento de consumo, é possível reduzir a conta de energia em até 35%. Os dispositivos aprendem seus padrões de uso e sugerem otimizações, ajudando você a economizar sem abrir mão do conforto.",
      
      "## Instalação Simples",
      
      "A instalação é surpreendentemente simples. Muitos modelos substituem interruptores convencionais sem necessidade do fio neutro, tornando-os ideais para retrofit em residências antigas. Em poucos minutos, você transforma interruptores comuns em pontos de controle inteligentes.",
      
      "## Recursos Avançados",
      
      "Os recursos avançados impressionam: monitoramento de consumo em tempo real permite identificar aparelhos que consomem mais energia; detecção de sobrecarga protege seus equipamentos; temporizadores programáveis automatizam qualquer tarefa; dimmer integrado ajusta a intensidade da luz criando ambientes perfeitos; e controles de cena ajustam múltiplos dispositivos simultaneamente com um único comando.",
      
      "## Segurança Inteligente",
      
      "Para segurança, esses dispositivos são perfeitos: simule presença durante viagens acendendo e apagando luzes em horários variados; receba alertas instantâneos de acionamento no seu celular; e integre com sistemas de alarme para uma proteção completa da residência.",
      
      "## Compatibilidade e Integrações",
      
      "A compatibilidade é ampla: funcionam perfeitamente com plataformas de automação como IFTTT, permitindo criar automações complexas; HomeKit da Apple para usuários do ecossistema iOS; SmartThings da Samsung para integração com eletrodomésticos inteligentes; e Home Assistant para quem busca controle total e personalização avançada.",
      
      "## Investimento no Futuro",
      
      "Investir em interruptores e tomadas inteligentes é investir no futuro: mais conforto no dia a dia, economia real na conta de energia, e sustentabilidade através do uso consciente de recursos. Tudo isso em dispositivos compactos, elegantes e fáceis de usar, que transformam qualquer residência em uma casa verdadeiramente inteligente.",
    ],
  },
};

const Artigo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = parseInt(id || "1");
  const article = articlesContent[articleId];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Artigo não encontrado</h1>
            <Button onClick={() => navigate("/comunidade")}>
              Voltar para Comunidade
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Article Content */}
      <article className="flex-1 -mt-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-12 space-y-8 animate-fade-in">
            {/* Header */}
            <div className="space-y-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/comunidade")}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>

              <div className="flex flex-wrap items-center gap-4">
                <Badge className="bg-primary">{article.category}</Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
                {article.title}
              </h1>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-secondary mt-12 mb-6"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-lg text-foreground/80 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="border-t pt-8 mt-12">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold text-secondary">
                  Quer saber mais sobre automação residencial?
                </h3>
                <p className="text-muted-foreground">
                  Explore mais artigos e descubra como transformar sua casa em
                  um ambiente inteligente
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/comunidade")}
                  className="gap-2"
                >
                  Ver mais artigos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Artigo;
