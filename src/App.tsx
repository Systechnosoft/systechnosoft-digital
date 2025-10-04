import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CloudServices from "./pages/CloudServices";
import DataMigration from "./pages/DataMigration";
import ManagedITServices from "./pages/ManagedITServices";
import MicrosoftDynamics365 from "./pages/MicrosoftDynamics365";
import BackupRecovery from "./pages/BackupRecovery";
import Salesforce from "./pages/Salesforce";
import Appian from "./pages/Appian";
import AIDevelopmentIntegration from "./pages/AIDevelopmentIntegration";
import AINaturalLanguageProcessing from "./pages/AINaturalLanguageProcessing";
import AIAutomation from "./pages/AIAutomation";
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
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/cloud" element={<CloudServices />} />
            <Route path="services/data-migration" element={<DataMigration />} />
            <Route path="services/managed-it-services" element={<ManagedITServices />} />
            <Route path="services/microsoft-dynamics-365" element={<MicrosoftDynamics365 />} />
            <Route path="services/backup-recovery" element={<BackupRecovery />} />
            <Route path="services/salesforce" element={<Salesforce />} />
            <Route path="services/appian" element={<Appian />} />
            <Route path="services/ai-development-integration" element={<AIDevelopmentIntegration />} />
            <Route path="services/ai-natural-language-processing" element={<AINaturalLanguageProcessing />} />
            <Route path="ai-automation" element={<AIAutomation />} />
            {/* Redirect old Salesforce route */}
            <Route path="services/low-code/salesforce" element={<Navigate to="/services/salesforce" replace />} />
            <Route path="services/low-code/salesforce/*" element={<Navigate to="/services/salesforce" replace />} />
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
