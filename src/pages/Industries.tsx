import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHero from "@/components/ServiceHero";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Shield,
  Activity,
  Zap,
  Database,
  Lock,
  Cloud,
  Server,
  Network,
  Heart,
  Plane,
  Droplet,
  Building2,
  FileCheck,
  Workflow,
  CircuitBoard,
  Radio,
  LineChart,
  ArrowRight,
  Factory,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Industries() {
  const [activeTab, setActiveTab] = useState("bfsi");

  useEffect(() => {
    // Handle hash-based deep linking
    const hash = window.location.hash.slice(1);
    if (hash && ["bfsi", "healthcare", "aviation", "oil-gas"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.pushState(null, "", `#${value}`);
  };

  const OutcomeCard = ({ value, label }: { value: string; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg p-6 text-center"
    >
      <div className="text-3xl font-bold text-[#E52629] mb-2">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
    </motion.div>
  );

  const DeliverableItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
    <div className="flex items-start space-x-3">
      <Icon className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" aria-hidden="true" />
      <span className="text-neutral-700">{text}</span>
    </div>
  );

  const ArchCard = ({ icon: Icon, label, caption }: { icon: any; label: string; caption: string }) => (
    <div className="bg-white rounded-lg border border-neutral-200 p-4 hover:border-[#E52629]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <Icon className="w-8 h-8 text-[#E52629] mb-3" aria-hidden="true" />
      <div className="font-semibold text-sm text-neutral-900 mb-1">{label}</div>
      <div className="text-xs text-neutral-500">{caption}</div>
    </div>
  );

  const ComplianceChips = ({ items }: { items: string[] }) => (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Badge 
            variant="secondary" 
            className="px-5 py-2.5 text-sm bg-white border-2 border-gray-200 hover:border-[#E52629] text-[#1C1C1C] transition-colors duration-300 cursor-default"
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </div>
  );

  const IndustrySection = ({
    title,
    icon: SectionIcon,
    lead,
    outcomes,
    deliverables,
    architectureCards,
    complianceItems,
  }: {
    title: string;
    icon: any;
    lead: string;
    outcomes: Array<{ value: string; label: string }>;
    deliverables: Array<{ icon: any; text: string }>;
    architectureCards: Array<{ icon: any; label: string; caption: string }>;
    complianceItems: string[];
  }) => (
    <>
      <div className="py-20 md:py-24 max-w-7xl mx-auto px-4">
        {/* Header - Center Aligned */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <SectionIcon className="w-10 h-10 text-[#E52629]" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              {title}
            </h2>
          </div>
          <p className="text-xl text-neutral-600">{lead}</p>
        </div>

        {/* Outcomes - Center Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {outcomes.map((outcome, idx) => (
            <OutcomeCard key={idx} value={outcome.value} label={outcome.label} />
          ))}
        </div>

        {/* What We Deliver - Center Aligned */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">What we deliver</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {deliverables.map((item, idx) => (
              <DeliverableItem key={idx} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>

        {/* Architecture Strip - Center Aligned with Hover Effects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Architecture</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {architectureCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg p-4">
                <card.icon className="w-8 h-8 text-[#E52629] mb-3 mx-auto" aria-hidden="true" />
                <div className="font-semibold text-sm text-neutral-900 mb-1 text-center">{card.label}</div>
                <div className="text-xs text-neutral-500 text-center">{card.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance - Center Aligned */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Compliance & Standards</h3>
          <ComplianceChips items={complianceItems} />
        </div>
      </div>

      {/* FAQ Section - Matching Cloud Services Pattern */}
      <section id="faq" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="item-1"
              className="bg-white border border-[#E6E6E6] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">
                How do you handle regulated data?
              </AccordionTrigger>
              <AccordionContent className="text-[#3C3C3C]">
                We implement Zero‑Trust architecture, data minimization practices, encryption in transit and at rest, and auditable controls. Our solutions are designed to meet industry‑specific compliance requirements including HIPAA, PCI‑DSS, GDPR, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2"
              className="bg-white border border-[#E6E6E6] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">
                What if we're hybrid/on‑prem?
              </AccordionTrigger>
              <AccordionContent className="text-[#3C3C3C]">
                We support hybrid and on‑premises environments through secure connectors, VPN/ExpressRoute configurations, and edge computing solutions. Our architectures are designed to work seamlessly across cloud and on‑prem infrastructure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3"
              className="bg-white border border-[#E6E6E6] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">
                How fast can we see value?
              </AccordionTrigger>
              <AccordionContent className="text-[#3C3C3C]">
                Our 4–8 week accelerators deliver immediate value through landing zone setup, CIS baseline implementation, and monitoring starter kits. We focus on quick wins while building a foundation for long‑term transformation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section - Matching Cloud Services Pattern */}
      <section className="py-20 bg-[#E52629] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
            Ready to transform your industry?
          </h2>
          <p className="font-inter text-xl text-white/95 mb-10">
            Let's discuss your goals and craft a tailored plan for measurable outcomes.
          </p>
          
          <div className="flex justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-[#E52629] hover:bg-gray-50 px-10 py-4 text-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E52629]"
            >
              <Link to="/contact">
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Industries | Systechnosoft</title>
        <meta
          name="description"
          content="Cloud, data, and AI solutions for BFSI, Healthcare, Aviation, and Oil & Gas. Secure, compliant, and outcomes-driven."
        />
      </Helmet>

      <ServiceHero
        title="Industries we power"
        subtitle="Cloud, data, and AI solutions engineered for regulated, mission-critical environments."
        uspChips={[
          "ISO 27001",
          "SOC 2",
          "GDPR/DPDP aware"
        ]}
        primaryButton={{
          text: "View case studies →",
          href: "/case-studies"
        }}
        secondaryButton={{
          text: "Claim your free insight",
          href: "/contact"
        }}
        image={{
          alt: "Industries We Serve",
          placeholderPrompt: "A professional illustration showing multiple industry sectors (banking, healthcare, aviation, energy) connected by cloud technology and data flows"
        }}
      />

      {/* Industry Tabs Navigation - Sticky */}
      <div className="bg-white py-8 sticky top-16 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex h-auto items-center justify-center p-0 bg-transparent gap-2">
              <button
                onClick={() => handleTabChange("bfsi")}
                className={`flex items-center gap-2 flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "bfsi"
                    ? 'bg-[#E52629] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#E52629] hover:bg-gray-100'
                }`}
              >
                <Building2 className="w-5 h-5" aria-hidden="true" />
                BFSI
              </button>
              <button
                onClick={() => handleTabChange("healthcare")}
                className={`flex items-center gap-2 flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "healthcare"
                    ? 'bg-[#E52629] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#E52629] hover:bg-gray-100'
                }`}
              >
                <Heart className="w-5 h-5" aria-hidden="true" />
                Healthcare
              </button>
              <button
                onClick={() => handleTabChange("aviation")}
                className={`flex items-center gap-2 flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "aviation"
                    ? 'bg-[#E52629] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#E52629] hover:bg-gray-100'
                }`}
              >
                <Plane className="w-5 h-5" aria-hidden="true" />
                Aviation
              </button>
              <button
                onClick={() => handleTabChange("oil-gas")}
                className={`flex items-center gap-2 flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeTab === "oil-gas"
                    ? 'bg-[#E52629] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#E52629] hover:bg-gray-100'
                }`}
              >
                <Factory className="w-5 h-5" aria-hidden="true" />
                Oil & Gas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="bg-background">
        <div className={activeTab === "bfsi" ? 'block' : 'hidden'}>
              <IndustrySection
                title="BFSI"
                icon={Building2}
        lead="Modern banking is always-on and hyper-personal. We deliver cloud, data, and AI capabilities that keep you compliant, resilient, and delightfully fast."
        outcomes={[
          { value: "30%", label: "faster transaction processing" },
          { value: "40-60%", label: "IT cost efficiency via automation" },
          { value: "24×7", label: "uptime with quarterly DR validation" },
        ]}
        deliverables={[
          { icon: Cloud, text: "Core banking cloud modernization & IaC" },
          { icon: Network, text: "Open Banking APIs & consent (PSD2-ready gateways)" },
          { icon: Database, text: "Data mesh & lakehouse governance" },
          { icon: Activity, text: "Payments observability & SRE SLAs" },
          { icon: Shield, text: "Real‑time fraud prevention (stream ML)" },
          { icon: Workflow, text: "KYC/loan doc intelligence (RPA + OCR/LLM)" },
          { icon: Lock, text: "Zero‑Trust IAM with step‑up auth" },
          { icon: Server, text: "DR runbooks with cross‑region failover" },
        ]}
        architectureCards={[
          { icon: Zap, label: "Streaming & Events", caption: "Event bus + CDC (Kafka style)" },
          { icon: Database, label: "Lakehouse", caption: "Structured + unstructured at scale" },
          { icon: CircuitBoard, label: "Model Serving", caption: "Real-time scoring endpoints" },
          { icon: Shield, label: "Controls", caption: "Policy, keys, secrets, audit" },
        ]}
                complianceItems={["PCI-DSS", "SOC 2", "GDPR/DPDP", "ISO 27001", "SOX"]}
              />
            </div>

            <div className={activeTab === "healthcare" ? 'block' : 'hidden'}>
              <IndustrySection
                title="Healthcare"
                icon={Heart}
        lead="Interoperable records, AI-assisted care, and secure connected devices—built for clinicians and patients alike."
        outcomes={[
          { value: "20-30%", label: "operational efficiency lift" },
          { value: "15%", label: "lower readmissions with predictive risk" },
          { value: "99.97%", label: "platform uptime across 18 months" },
        ]}
        deliverables={[
          { icon: FileCheck, text: "FHIR/HL7 integration & unified EHR data fabric" },
          { icon: Activity, text: "Imaging AI workflow orchestration" },
          { icon: Lock, text: "PHI tokenization & data minimization" },
          { icon: TrendingUp, text: "CDSS & care‑pathway analytics" },
          { icon: Heart, text: "Telehealth & patient portals" },
          { icon: Radio, text: "Device/IoMT monitoring & alerts" },
          { icon: Shield, text: "HIPAA logging & audit trails" },
          { icon: Server, text: "DR drills & backup immutability" },
        ]}
        architectureCards={[
          { icon: FileCheck, label: "FHIR Core", caption: "Normalized patient data" },
          { icon: LineChart, label: "Analytics", caption: "Cohorting & quality KPIs" },
          { icon: Radio, label: "IoMT Hub", caption: "Secure device ingress" },
          { icon: Lock, label: "Privacy", caption: "De-identification + consent" },
        ]}
                complianceItems={["HIPAA", "HITRUST", "ISO 27001", "GDPR/DPDP"]}
              />
            </div>

            <div className={activeTab === "aviation" ? 'block' : 'hidden'}>
              <IndustrySection
                title="Aviation"
                icon={Plane}
        lead="Predictive maintenance, real-time ops control, and passenger-first digital experiences—safely at scale."
        outcomes={[
          { value: "30-50%", label: "reduction in unplanned downtime" },
          { value: "Multi-million", label: "annual fuel savings via route AI" },
          { value: "Faster", label: "turnarounds and NPS lift" },
        ]}
        deliverables={[
          { icon: Activity, text: "Ops control center analytics" },
          { icon: Workflow, text: "Crew & gate optimization" },
          { icon: Network, text: "Baggage tracking & disruption comms" },
          { icon: Building2, text: "Digital twins for fleet & hubs" },
          { icon: Shield, text: "Safety analytics & event reporting" },
          { icon: Server, text: "Edge processing for bandwidth‑poor ops" },
          { icon: Plane, text: "Routing/turn‑time optimization (ops ML)" },
          { icon: Database, text: "DR plans for OCC continuity" },
        ]}
        architectureCards={[
          { icon: Radio, label: "Edge Telemetry", caption: "On-aircraft sensor capture" },
          { icon: LineChart, label: "Time-Series Store", caption: "Long-horizon trends" },
          { icon: TrendingUp, label: "Optimization", caption: "Routing & crew ML" },
          { icon: Shield, label: "Safety Layer", caption: "Hazard models + audits" },
        ]}
                complianceItems={["ISO 27001", "SOC 2", "DO-178C (guidance)", "EASA/IATA data practices"]}
              />
            </div>

            <div className={activeTab === "oil-gas" ? 'block' : 'hidden'}>
              <IndustrySection
                title="Oil & Gas"
                icon={Factory}
        lead="Digital oilfields—instrumented, automated, and safer. From wells to refineries, we turn data into decisions."
        outcomes={[
          { value: "10-40%", label: "maintenance cost reduction" },
          { value: "5%+", label: "OEE improvement across assets" },
          { value: "Fewer", label: "HSE incidents with real-time sensing" },
        ]}
        deliverables={[
          { icon: Activity, text: "Predictive reliability (vibration/condition‑based)" },
          { icon: TrendingUp, text: "Production optimization models" },
          { icon: Network, text: "SCADA/PI integrations & historian sync" },
          { icon: FileCheck, text: "Environmental & emissions reporting" },
          { icon: Droplet, text: "Pipeline leak detection & real‑time alerts" },
          { icon: Server, text: "Edge compute for remote/ATEX sites" },
          { icon: Shield, text: "IEC‑62443 network segmentation" },
          { icon: Database, text: "DR/BCP for plants & terminals" },
        ]}
        architectureCards={[
          { icon: Radio, label: "Edge & Field", caption: "Rugged gateways" },
          { icon: Server, label: "Historian Bridge", caption: "SCADA/PI sync" },
          { icon: Database, label: "Lake + ML", caption: "Yield & anomaly models" },
          { icon: Shield, label: "HSE Stack", caption: "Permits, incidents, audits" },
        ]}
                complianceItems={["IEC-62443", "ISO 14224", "SOC 2", "ISO 27001"]}
              />
            </div>
          </div>
    </>
  );
}
