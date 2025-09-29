import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CloudServices from "./pages/CloudServices";
import DataMigration from "./pages/DataMigration";
import ManagedITServices from "./pages/ManagedITServices";
import MicrosoftDynamics365 from "./pages/MicrosoftDynamics365";
import BackupRecovery from "./pages/BackupRecovery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/cloud" element={<CloudServices />} />
            <Route path="services/data-migration" element={<DataMigration />} />
            <Route path="services/managed-it-services" element={<ManagedITServices />} />
            <Route path="services/microsoft-dynamics-365" element={<MicrosoftDynamics365 />} />
            <Route path="services/backup-recovery" element={<BackupRecovery />} />
            <Route path="contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
