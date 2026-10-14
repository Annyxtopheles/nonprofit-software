import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardGovernance from "./pages/BoardGovernance";
import BoardGovernanceFeatures from "./pages/BoardGovernanceFeatures";
import ControlTower from "./pages/ControlTower";
import SalesDeckIndex from "./pages/SalesDeckIndex";
import SalesDeckControlTower from "./pages/SalesDeckControlTower";
import SalesDeckBoardGovernance from "./pages/SalesDeckBoardGovernance";

import About from "./pages/About";
import LeadMagnet from "./pages/LeadMagnet";
import Pricing from "./pages/Pricing";
import Trust from "./pages/Trust";
import ControlTowerPricing from "./pages/ControlTowerPricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<ControlTower />} />
          <Route path="/board-governance" element={<BoardGovernance />} />
          <Route path="/board-governance/features" element={<BoardGovernanceFeatures />} />
          <Route path="/control-tower" element={<ControlTower />} />
          <Route path="/sales-deck" element={<SalesDeckIndex />} />
          <Route path="/sales-deck/control-tower" element={<SalesDeckControlTower />} />
          <Route path="/sales-deck/board-governance" element={<SalesDeckBoardGovernance />} />
          <Route path="/control-tower/pricing" element={<ControlTowerPricing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/features" element={<BoardGovernanceFeatures />} />
          <Route path="/about" element={<About />} />
          <Route path="/board-governance/checklist" element={<LeadMagnet />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
