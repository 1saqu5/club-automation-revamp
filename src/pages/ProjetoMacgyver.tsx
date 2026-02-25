import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Play, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Painel de Controle DIY com ESP32",
    description:
      "Criamos um painel touchscreen completo usando ESP32 para controlar luzes, temperatura e câmeras da casa inteira.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Eletrônica",
    duration: "45 min",
    date: "20 Fev 2026",
    status: "Concluído",
  },
  {
    id: 2,
    title: "Sensor de Presença Inteligente Caseiro",
    description:
      "Montamos um sensor de presença com Arduino que envia notificações e ativa rotinas automaticamente.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Arduino",
    duration: "32 min",
    date: "15 Fev 2026",
    status: "Concluído",
  },
  {
    id: 3,
    title: "Irrigação Automática com Raspberry Pi",
    description:
      "Sistema de irrigação inteligente que monitora umidade do solo e rega automaticamente suas plantas.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Raspberry Pi",
    duration: "55 min",
    date: "10 Fev 2026",
    status: "Em Andamento",
  },
  {
    id: 4,
    title: "Fechadura Eletrônica com RFID",
    description:
      "Projeto completo de uma fechadura controlada por cartão RFID e app no celular com ESP8266.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Segurança",
    duration: "40 min",
    date: "05 Fev 2026",
    status: "Concluído",
  },
  {
    id: 5,
    title: "Estação Meteorológica Wi-Fi",
    description:
      "Construímos uma estação que mede temperatura, umidade, pressão e envia dados para um dashboard online.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "IoT",
    duration: "38 min",
    date: "28 Jan 2026",
    status: "Em Andamento",
  },
  {
    id: 6,
    title: "Controle de Cortinas Motorizado",
    description:
      "Motor controlado por voz e app para abrir e fechar cortinas em horários programados.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Motor",
    duration: "28 min",
    date: "20 Jan 2026",
    status: "Concluído",
  },
];

const categories = ["Todos", "Eletrônica", "Arduino", "Raspberry Pi", "Segurança", "IoT", "Motor"];

const ProjetoMacgyver = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-red-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.3),transparent_60%)]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-red-200 text-sm font-medium mb-6 border border-red-500/30">
                <Wrench className="w-4 h-4" />
                Projetos DIY
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Projeto
                <span className="block text-red-300 mt-2">MacGyver</span>
              </h1>
              <p className="text-lg text-red-100/80 max-w-2xl mx-auto leading-relaxed">
                Projetos personalizados de automação residencial criados por nós.
                Acompanhe cada etapa da construção com artigos detalhados e vídeos
                passo a passo.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="container mx-auto px-4 sm:px-6 -mt-8 relative z-20">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-muted-foreground hidden md:block" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-red-700 text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-red-100 hover:text-red-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10"
              >
                {/* Image / Video */}
                <div className="relative aspect-video overflow-hidden">
                  {playingVideo === project.id ? (
                    <iframe
                      src={project.videoUrl + "?autoplay=1"}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <button
                        onClick={() => setPlayingVideo(project.id)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-red-600/40 hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white ml-1" />
                        </div>
                      </button>
                      <div className="absolute top-3 left-3">
                        <Badge
                          className={`text-xs ${
                            project.status === "Concluído"
                              ? "bg-green-600/90 text-white"
                              : "bg-amber-500/90 text-white"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-red-700/90 text-white text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </>
                  )}
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {project.duration}
                    </span>
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all"
                  >
                    Ver Projeto Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Wrench className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-40" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-muted-foreground">
                Tente ajustar os filtros ou buscar por outro termo.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjetoMacgyver;
