import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ArrowRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Interruptores e Tomadas Inteligentes: O Futuro da Automação Residencial",
    excerpt:
      "Os interruptores e tomadas inteligentes representam a evolução definitiva no controle residencial. Compatíveis com WiFi, Zigbee e Z-Wave, esses dispositivos transformam qualquer ambiente em um espaço conectado e eficiente. Controle luzes, aparelhos e equipamentos através de comandos de voz via Alexa, Google Assistant ou Siri, ou pelo smartphone de qualquer lugar do mundo. Crie rotinas personalizadas: acorde com as luzes acendendo gradualmente, programe o desligamento automático de aparelhos esquecidos, e economize até 35% na conta de energia com agendamentos inteligentes. A instalação é simples - muitos modelos substituem interruptores convencionais sem necessidade de neutro, ideais para retrofit. Recursos avançados incluem monitoramento de consumo em tempo real, detecção de sobrecarga, temporizadores, dimmer integrado, e controles de cena que ajustam múltiplos dispositivos simultaneamente. Perfeitos para segurança: simule presença durante viagens, receba alertas de acionamento, e integre com sistemas de alarme. Compatíveis com automações via IFTTT, HomeKit, SmartThings e Home Assistant. Invista no futuro: conforto, economia e sustentabilidade em um único dispositivo.",
    category: "Produtos",
    date: "3 de agosto de 2023",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
  },
  {
    id: 2,
    title: "Integração de Assistente Virtual na Automação Residencial",
    excerpt:
      "Simplificando a Vida com Comandos de Voz. A integração de assistentes virtuais como Alexa da Amazon revoluciona o controle da sua casa.",
    category: "Assistente Virtual",
    date: "2 de agosto de 2023",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800",
  },
  {
    id: 3,
    title: "Guia para Iniciantes em Automação Residencial",
    excerpt:
      "Transformando sua Casa em um Ambiente Inteligente. A automação residencial tem revolucionado a forma como interagimos com nossas casas.",
    category: "Produtos",
    date: "28 de julho de 2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: 4,
    title: "Top 10 Dispositivos Inteligentes para uma Casa Conectada",
    excerpt:
      "Simplificando sua Vida Através da Automação Residencial. Conheça os melhores dispositivos para automatizar cada cômodo da sua casa.",
    category: "Produtos",
    date: "25 de julho de 2023",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800",
  },
  {
    id: 5,
    title: "Segurança Inteligente: Proteja sua Casa com Tecnologia",
    excerpt:
      "Câmeras, sensores e sistemas de alarme conectados que você pode monitorar de qualquer lugar. Sua família sempre protegida.",
    category: "Segurança",
    date: "20 de julho de 2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: 6,
    title: "Economize Energia com Automação Inteligente",
    excerpt:
      "Descubra como a automação pode reduzir sua conta de luz em até 30%. Iluminação e climatização eficientes fazem a diferença.",
    category: "Economia",
    date: "15 de julho de 2023",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
  },
];

const categories = ["Todos", "Produtos", "Assistente Virtual", "Segurança", "Economia"];

const Comunidade = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary via-primary to-secondary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Comunidade
            </h1>
            <p className="text-xl text-white/90">
              Artigos, guias e dicas para transformar sua casa em um ambiente
              inteligente
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover-lift group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary">{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-secondary line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn"
                    >
                      Continue Lendo
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nenhum artigo encontrado com esses critérios.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comunidade;
