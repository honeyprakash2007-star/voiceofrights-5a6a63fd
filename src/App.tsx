import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WomenProtectionLaws from "./pages/WomenProtectionLaws";
import LegalRights from "./pages/LegalRights";
import ConstitutionalRights from "./pages/ConstitutionalRights";
import ConsumerRights from "./pages/ConsumerRights";
import CyberSafety from "./pages/CyberSafety";
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
          <Route path="/women-protection-laws" element={<WomenProtectionLaws />} />
          <Route path="/legal-rights" element={<LegalRights />} />
          <Route path="/constitutional-rights" element={<ConstitutionalRights />} />
          <Route path="/consumer-rights" element={<ConsumerRights />} />
          <Route path="/cyber-safety" element={<CyberSafety />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
