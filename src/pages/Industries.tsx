import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  ChevronDown,
  Building2,
  FileCheck,
  Workflow,
  CircuitBoard,
  Radio,
  LineChart,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Industries() {
  const [activeSection, setActiveSection] = useState("bfsi");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const subNavItems = [
    { id: "bfsi", label: "BFSI" },
    { id: "healthcare", label: "Healthcare" },
    { id: "aviation", label: "Aviation" },
    { id: "oil-gas", label: "Oil & Gas" },
    { id: "faqs", label: "FAQs" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: [0, 0.3, 0.5],
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current[id];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  const OutcomeCard = ({ value, label }: { value: string; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-neutral-200 p-6 text-center hover:border-[#E52629]/60 hover:shadow-lg transition-all duration-200"
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
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
        >
          {item}
        </span>
      ))}
    </div>
  );

  const IndustrySection = ({
    id,
    eyebrow,
    title,
    lead,
    outcomes,
    deliverables,
    architectureCards,
    complianceItems,
  }: {
    id: string;
    eyebrow: string;
    title: string;
    lead: string;
    outcomes: Array<{ value: string; label: string }>;
    deliverables: Array<{ icon: any; text: string }>;
    architectureCards: Array<{ icon: any; label: string; caption: string }>;
    complianceItems: string[];
  }) => (
    <section
      id={id}
      ref={(el) => (sectionsRef.current[id] = el)}
      className="py-20 md:py-24"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="text-sm font-semibold text-[#E52629] uppercase tracking-wide mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl">{lead}</p>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {outcomes.map((outcome, idx) => (
            <OutcomeCard key={idx} value={outcome.value} label={outcome.label} />
          ))}
        </div>

        {/* What We Deliver */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">What we deliver</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <DeliverableItem key={idx} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>

        {/* Architecture Strip */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Architecture</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureCards.map((card, idx) => (
              <ArchCard key={idx} icon={card.icon} label={card.label} caption={card.caption} />
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Compliance & Standards</h3>
          <ComplianceChips items={complianceItems} />
        </div>

        {/* CTA Bar */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg text-neutral-700">
            See how we've done it in the real world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link to="/case-studies">View case studies</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
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

      {/* Hero */}
      <HeroBackground fullHeight>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
              Industries we power
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8">
              Cloud, data, and AI solutions engineered for regulated, mission-critical environments.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg">
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View case studies</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
              <span className="inline-flex items-center">
                <Shield className="w-4 h-4 mr-1" aria-hidden="true" />
                ISO 27001
              </span>
              <span className="inline-flex items-center">
                <Shield className="w-4 h-4 mr-1" aria-hidden="true" />
                SOC 2
              </span>
              <span className="inline-flex items-center">
                <Shield className="w-4 h-4 mr-1" aria-hidden="true" />
                GDPR/DPDP aware
              </span>
            </div>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Sticky Sub-nav */}
      <div className="sticky top-[73px] z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav
            role="tablist"
            aria-label="Industry sections"
            className="flex overflow-x-auto scrollbar-hide"
          >
            {subNavItems.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={activeSection === item.id}
                aria-controls={item.id}
                tabIndex={activeSection === item.id ? 0 : -1}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200
                  border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2
                  ${
                    activeSection === item.id
                      ? "border-[#E52629] text-[#E52629]"
                      : "border-transparent text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* BFSI Section */}
      <IndustrySection
        id="bfsi"
        eyebrow="Industry"
        title="BFSI"
        lead="Modern banking is always-on and hyper-personal. We deliver cloud, data, and AI capabilities that keep you compliant, resilient, and delightfully fast."
        outcomes={[
          { value: "30%", label: "faster transaction processing" },
          { value: "40-60%", label: "IT cost efficiency via automation" },
          { value: "24×7", label: "uptime with quarterly DR validation" },
        ]}
        deliverables={[
          { icon: Cloud, text: "Core banking cloud migration & IaC" },
          { icon: Shield, text: "Real-time fraud detection (stream ML)" },
          { icon: Network, text: "Open Banking & API gateways" },
          { icon: Workflow, text: "RPA + doc intelligence for KYC/loan ops" },
          { icon: Database, text: "Data mesh, lineage, and Lakehouse" },
          { icon: Lock, text: "Zero-Trust IAM & step-up auth" },
          { icon: Activity, text: "Payments observability & SRE SLAs" },
          { icon: Server, text: "DR runbooks with cross-region failover" },
        ]}
        architectureCards={[
          { icon: Zap, label: "Streaming & Events", caption: "Event bus + CDC (Kafka style)" },
          { icon: Database, label: "Lakehouse", caption: "Structured + unstructured at scale" },
          { icon: CircuitBoard, label: "Model Serving", caption: "Real-time scoring endpoints" },
          { icon: Shield, label: "Controls", caption: "Policy, keys, secrets, audit" },
        ]}
        complianceItems={["PCI-DSS", "SOC 2", "GDPR/DPDP", "ISO 27001", "SOX"]}
      />

      <div className="border-t border-neutral-200" />

      {/* Healthcare Section */}
      <IndustrySection
        id="healthcare"
        eyebrow="Industry"
        title="Healthcare"
        lead="Interoperable records, AI-assisted care, and secure connected devices—built for clinicians and patients alike."
        outcomes={[
          { value: "20-30%", label: "operational efficiency lift" },
          { value: "15%", label: "lower readmissions with predictive risk" },
          { value: "99.97%", label: "platform uptime across 18 months" },
        ]}
        deliverables={[
          { icon: FileCheck, text: "Unified EHR integration (FHIR/HL7)" },
          { icon: Heart, text: "Telehealth + patient portals" },
          { icon: Activity, text: "Imaging AI workflow orchestration" },
          { icon: Radio, text: "Device/IoMT monitoring & alerts" },
          { icon: Lock, text: "PHI tokenization & data minimization" },
          { icon: Shield, text: "HIPAA logging & audit trails" },
          { icon: TrendingUp, text: "CDSS & analytics for care pathways" },
          { icon: Server, text: "DR drills, backup immutability" },
        ]}
        architectureCards={[
          { icon: FileCheck, label: "FHIR Core", caption: "Normalized patient data" },
          { icon: LineChart, label: "Analytics", caption: "Cohorting & quality KPIs" },
          { icon: Radio, label: "IoMT Hub", caption: "Secure device ingress" },
          { icon: Lock, label: "Privacy", caption: "De-identification + consent" },
        ]}
        complianceItems={["HIPAA", "HITRUST", "ISO 27001", "GDPR/DPDP"]}
      />

      <div className="border-t border-neutral-200" />

      {/* Aviation Section */}
      <IndustrySection
        id="aviation"
        eyebrow="Industry"
        title="Aviation"
        lead="Predictive maintenance, real-time ops control, and passenger-first digital experiences—safely at scale."
        outcomes={[
          { value: "30-50%", label: "reduction in unplanned downtime" },
          { value: "Multi-million", label: "annual fuel savings via route AI" },
          { value: "Faster", label: "turnarounds and NPS lift" },
        ]}
        deliverables={[
          { icon: Plane, text: "Aircraft health monitoring & PdM" },
          { icon: Activity, text: "Ops control center analytics" },
          { icon: Workflow, text: "Crew & gate optimization" },
          { icon: Network, text: "Baggage tracking & disruption comms" },
          { icon: Shield, text: "Safety analytics & event reporting" },
          { icon: Building2, text: "Digital twins for fleet & hubs" },
          { icon: Server, text: "Edge processing for bandwidth-poor ops" },
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

      <div className="border-t border-neutral-200" />

      {/* Oil & Gas Section */}
      <IndustrySection
        id="oil-gas"
        eyebrow="Industry"
        title="Oil & Gas"
        lead="Digital oilfields—instrumented, automated, and safer. From wells to refineries, we turn data into decisions."
        outcomes={[
          { value: "10-40%", label: "maintenance cost reduction" },
          { value: "5%+", label: "OEE improvement across assets" },
          { value: "Fewer", label: "HSE incidents with real-time sensing" },
        ]}
        deliverables={[
          { icon: Activity, text: "Asset reliability & vibration analytics" },
          { icon: Droplet, text: "Pipeline leak detection & alerts" },
          { icon: TrendingUp, text: "Production optimization models" },
          { icon: Server, text: "Edge compute for remote sites" },
          { icon: Network, text: "SCADA/PI integrations & historian sync" },
          { icon: Shield, text: "IEC-62443 network segmentation" },
          { icon: FileCheck, text: "Environmental monitoring & reporting" },
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

      <div className="border-t border-neutral-200" />

      {/* FAQ Section */}
      <section
        id="faqs"
        ref={(el) => (sectionsRef.current["faqs"] = el)}
        className="py-20 md:py-24 bg-neutral-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-neutral-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                How do you handle regulated data?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                We implement Zero-Trust architecture, data minimization practices, encryption in transit and at rest, and auditable controls. Our solutions are designed to meet industry-specific compliance requirements including HIPAA, PCI-DSS, GDPR, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-neutral-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                What if we're hybrid/on-prem?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                We support hybrid and on-premises environments through secure connectors, VPN/ExpressRoute configurations, and edge computing solutions. Our architectures are designed to work seamlessly across cloud and on-prem infrastructure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-neutral-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                How fast can we see value?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Our 4-8 week accelerators deliver immediate value through landing zone setup, CIS baseline implementation, and monitoring starter kits. We focus on quick wins while building a foundation for long-term transformation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Book a consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View case studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
