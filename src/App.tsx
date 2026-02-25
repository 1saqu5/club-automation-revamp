import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Comunidade from "./pages/Comunidade";
import Artigo from "./pages/Artigo";
import Resultados from "./pages/Resultados";
import Demonstracao from "./pages/Demonstracao";
import Curadoria from "./pages/Curadoria";
import ProjetoMacgyver from "./pages/ProjetoMacgyver";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/artigo/:id" element={<Artigo />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/demonstracao" element={<Demonstracao />} />
          <Route path="/curadoria" element={<Curadoria />} />
          <Route path="/projeto-macgyver" element={<ProjetoMacgyver />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
