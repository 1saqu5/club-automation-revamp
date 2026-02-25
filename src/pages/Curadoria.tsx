import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, MessageCircle, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Interruptor Inteligente Wi-Fi 3 Botões",
    brand: "Sonoff",
    description: "Controle 3 pontos de luz pelo celular ou assistente de voz. Compatível com Alexa e Google Home.",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Lâmpada LED Inteligente RGB Wi-Fi",
    brand: "Positivo",
    description: "16 milhões de cores, dimmerizável e controle por voz. Economia de até 80% de energia.",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1565814329452-e1432bc73e68?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Tomada Inteligente Wi-Fi com Medidor",
    brand: "Ekaza",
    description: "Monitore o consumo de energia em tempo real. Agende horários e crie automações.",
    price: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Sensor de Movimento Zigbee",
    brand: "Aqara",
    description: "Detecta presença e ativa automações. Bateria com duração de até 2 anos.",
    price: "R$ 119,90",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Hub Central Zigbee/Wi-Fi",
    brand: "Sonoff",
    description: "Centralize todos os dispositivos Zigbee em um único hub. Integra com Home Assistant.",
    price: "R$ 149,90",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Câmera de Segurança Wi-Fi 360°",
    brand: "Tapo",
    description: "Visão noturna, áudio bidirecional, detecção de movimento com alerta no celular.",
    price: "R$ 179,90",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    link: "#",
    rating: 4.7,
  },
];

const faqs = [
  {
    question: "O que é automação residencial?",
    answer: "Automação residencial é o uso de tecnologia para controlar e automatizar dispositivos e sistemas da sua casa, como iluminação, climatização, segurança e entretenimento, proporcionando mais conforto, economia e praticidade no dia a dia.",
  },
  {
    question: "Como funciona o sistema de automação?",
    answer: "O sistema funciona conectando dispositivos inteligentes à sua rede Wi-Fi ou a um hub central. Através de aplicativos no celular, assistentes de voz ou automações programadas, você pode controlar tudo remotamente ou de forma automática.",
  },
  {
    question: "Quais são os benefícios da automação?",
    answer: "Os principais benefícios incluem economia de energia (até 30%), maior segurança com monitoramento em tempo real, conforto com automações personalizadas, praticidade no controle por voz e valorização do imóvel.",
  },
  {
    question: "Preciso de internet para automação?",
    answer: "Para a maioria das funcionalidades sim, é necessária uma conexão Wi-Fi estável. Porém, alguns dispositivos Zigbee e Z-Wave funcionam localmente através de um hub, mantendo as automações básicas mesmo sem internet.",
  },
  {
    question: "É possível adaptar sistemas já existentes?",
    answer: "Sim! A maioria dos dispositivos inteligentes são projetados para substituir os convencionais sem necessidade de obras. Interruptores, tomadas e lâmpadas inteligentes podem ser instalados facilmente no lugar dos tradicionais.",
  },
  {
    question: "Quais dispositivos são compatíveis?",
    answer: "Trabalhamos com dispositivos compatíveis com os principais ecossistemas: Alexa, Google Home, Apple HomeKit e Home Assistant. Marcas como Sonoff, Aqara, Tapo, Positivo e Ekaza são algumas das que recomendamos.",
  },
];

const Curadoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero / Introdução */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Produtos Selecionados</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Curadoria Club
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Selecionamos os melhores produtos de automação residencial que já testamos e recomendamos 
              em nosso site e redes sociais. Cada item foi escolhido com base em qualidade, custo-benefício 
              e compatibilidade com os principais ecossistemas inteligentes.
            </p>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Produtos Recomendados
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Todos os produtos abaixo foram testados e aprovados pela nossa equipe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover-lift group"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-bold text-foreground mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" asChild className="bg-gradient-primary hover:opacity-90">
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Comprar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Tire suas dúvidas sobre automação residencial
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Não encontrou o que procurava?
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Curadoria;
