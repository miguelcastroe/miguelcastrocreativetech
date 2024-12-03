import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import PeruvianDeclassifiedArt from "./pages/PeruvianDeclassifiedArt";
import MouthPad from "./pages/MouthPad";
import VanishingEmails from "./pages/VanishingEmails";
import BehindTheFear from "./pages/BehindTheFear";
import Readme from "./pages/Readme";
import About from "./pages/About";
import TemplesOfKnowledge from "./pages/TemplesOfKnowledge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/peruvian-declassified-art" element={<PeruvianDeclassifiedArt />} />
          <Route path="/mouthpad" element={<MouthPad />} />
          <Route path="/vanishing-emails" element={<VanishingEmails />} />
          <Route path="/behind-the-fear" element={<BehindTheFear />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/about" element={<About />} />
          <Route path="/temples-of-knowledge" element={<TemplesOfKnowledge />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;