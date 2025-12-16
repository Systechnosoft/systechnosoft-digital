import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Database, 
  Workflow, 
  FileText, 
  Globe, 
  Shield,
  Zap,
  Target,
  BarChart3,
  Activity,
  CheckCircle2,
  LineChart,
  Lock,
  Settings,
  Layers,
  Eye,
  RefreshCw,
  Play,
  Pause,
  UserCheck,
  MessageSquare,
  PieChart,
  Cog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useConsultationStore } from "@/lib/consultation-store";

// KPI Counter Component
function KpiCounter({ label, sublabel }: { label: string; sublabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl md:text-2xl font-bold text-[#E52629] mb-2">{label}</p>
        <p className="text-sm text-muted-foreground">{sublabel}</p>
      </motion.div>
    </div>
  );
}

export default function CustomerRelationshipManagement() {
  const shouldReduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const { openCalendly } = useConsultationStore();

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0 }
  };

  const staggeredFadeUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const capabilities = [
    { icon: Target, title: "CRM discovery & blueprint", description: "Process + data model alignment" },
    { icon: Cog, title: "Implementation & configuration", description: "Platform setup + role-based access" },
    { icon: Globe, title: "Integrations", description: "ERP/Email/CTI/Identity; API-first" },
    { icon: Database, title: "Data migration & quality", description: "Mapping, dedupe, validation" },
    { icon: Workflow, title: "Workflow automation", description: "Approvals, routing, SLAs" },
    { icon: BarChart3, title: "Reporting & dashboards", description: "Pipeline, service, journey insights" },
    { icon: Shield, title: "Security & governance", description: "Environments, releases, auditability" },
    { icon: RefreshCw, title: "Managed support & optimization", description: "Hypercare + continuous improvements" },
  ];

  const platforms = [
    { id: "salesforce", name: "Salesforce", hasPage: true },
    { id: "dynamics", name: "Microsoft Dynamics 365", hasPage: false },
    { id: "hubspot", name: "HubSpot CRM", hasPage: false },
    { id: "zoho", name: "Zoho CRM", hasPage: false },
  ];

  const deliverySteps = [
    {
      number: "1",
      title: "Discover & design",
      bullets: ["Goals, data model & security alignment", "Adoption & change management plan"]
    },
    {
      number: "2",
      title: "Build & integrate",
      bullets: ["Configuration, automation & integrations", "Data migration & quality assurance"]
    },
    {
      number: "3",
      title: "Launch & optimize",
      bullets: ["Training, hypercare & metrics tracking", "Continuous improvements & governance"]
    },
  ];

  const governanceItems = [
    "Role-based access and least privilege",
    "Audit trails and change logging",
    "Environments + release discipline",
    "Data handling alignment (retention + consent workflows if needed)",
    "Integration security (tokens/secrets)",
    "Performance guardrails",
    "Training and enablement plan",
    "Ongoing monitoring and optimization"
  ];

  const faqs = [
    {
      question: "What is CRM and what problems does it solve?",
      answer: "CRM (Customer Relationship Management) is a strategy and technology for managing all your company's interactions with current and potential customers. It solves problems like fragmented customer data, inconsistent follow-ups, lack of pipeline visibility, and disconnected teams across sales, marketing, and service."
    },
    {
      question: "How do you choose between Salesforce, Dynamics 365, HubSpot, and Zoho?",
      answer: "The choice depends on your organization's size, existing tech stack, budget, and specific needs. Salesforce excels for enterprise-scale customization, Dynamics 365 integrates seamlessly with Microsoft tools, HubSpot offers fast adoption with strong marketing alignment, and Zoho provides cost-effective automation with broad suite integration."
    },
    {
      question: "Can CRM integrate with our ERP and existing tools?",
      answer: "Yes. Modern CRM platforms are API-first and support pre-built connectors for most ERP systems (SAP, Oracle, NetSuite), email platforms, telephony systems, and identity providers. We design integrations that maintain data consistency and respect your security requirements."
    },
    {
      question: "How do you approach data migration and quality?",
      answer: "We follow a structured approach: data audit and mapping, deduplication rules, validation logic, pilot migration with quality checks, and full migration with rollback capability. Data quality is addressed both during migration and through ongoing governance rules in the new system."
    },
    {
      question: "How do you drive user adoption?",
      answer: "Adoption starts in the design phase by involving key users. We then provide role-based training, intuitive UX configurations, quick wins that demonstrate value, and ongoing support. Change management and executive sponsorship are critical success factors we help you establish."
    },
    {
      question: "What does governance look like after go-live?",
      answer: "Post go-live governance includes environment management, release discipline, data stewardship, security reviews, and performance monitoring. We establish runbooks, escalation paths, and continuous improvement cycles to keep your CRM healthy and aligned with evolving business needs."
    },
    {
      question: "Can we start small and expand later?",
      answer: "Absolutely. We recommend starting with a focused pilot—one team, one process, or one customer journey—to prove value quickly. Modern CRM platforms are modular, making it easy to expand to additional teams, regions, or capabilities once the foundation is solid."
    },
  ];

  const scrollToPlatform = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Customer Relationship Management Services | CRM Implementation | Systechnosoft</title>
        <meta name="description" content="Build a single source of truth across sales, marketing, and service with CRM implementation. Improve visibility, automate lifecycle handoffs with Salesforce, Dynamics 365, HubSpot, and Zoho." />
        <meta property="og:title" content="Customer Relationship Management Services | CRM Implementation | Systechnosoft" />
        <meta property="og:description" content="Build a single source of truth across sales, marketing, and service with CRM implementation. Improve visibility, automate lifecycle handoffs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://systechnosoft.com/services/crm" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-animated relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Animated Background */}
        <div className="hero-animated__bg absolute inset-0 z-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(229,38,41,0.1),transparent)]" />
          {!shouldReduceMotion && !isPaused && (
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary)), transparent)`,
                backgroundSize: "400px 400px"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute top-24 right-6 z-20 p-2 rounded-full bg-white/80 border border-gray-200 shadow-sm hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629]"
          aria-label={isPaused ? "Play animations" : "Pause animations"}
        >
          {isPaused ? <Play className="w-4 h-4 text-gray-600" /> : <Pause className="w-4 h-4 text-gray-600" />}
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Copy */}
            <div className="space-y-6">
              <motion.p 
                variants={fadeUpVariants}
                className="text-sm font-medium text-[#E52629] tracking-wide uppercase"
              >
                Low-code • Customer Platforms
              </motion.p>
              
              <motion.h1 
                variants={fadeUpVariants} 
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
              >
                CRM that unifies data, teams, and customer journeys.
              </motion.h1>
              
              <motion.p 
                variants={fadeUpVariants} 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Build a single source of truth across sales, marketing, and service—improve visibility, automate lifecycle handoffs, and strengthen adoption with scalable CRM delivery.
              </motion.p>

              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  size="lg"
                  onClick={() => openCalendly()}
                  className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold"
                >
                  <Link to="/services/salesforce">Explore Salesforce Services</Link>
                </Button>
              </motion.div>

              <motion.p variants={fadeUpVariants} className="text-sm text-muted-foreground">
                <Link 
                  to="/services/salesforce" 
                  className="inline-flex items-center gap-1 text-[#E52629] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
                >
                  Looking specifically for Salesforce? Go to Salesforce page
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.p>
            </div>

            {/* Right: Visual placeholder */}
            <motion.div 
              variants={fadeUpVariants}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-gray-100 shadow-xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <Users className="w-10 h-10 text-[#E52629] mb-3" />
                    <span className="text-sm font-medium text-gray-700">Customers</span>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <PieChart className="w-10 h-10 text-[#E52629] mb-3" />
                    <span className="text-sm font-medium text-gray-700">Analytics</span>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <Workflow className="w-10 h-10 text-[#E52629] mb-3" />
                    <span className="text-sm font-medium text-gray-700">Automation</span>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <Globe className="w-10 h-10 text-[#E52629] mb-3" />
                    <span className="text-sm font-medium text-gray-700">Integrations</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KPI Ribbon */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCounter label="Unified customer view" sublabel="One place for pipeline + interactions" />
            <KpiCounter label="Lifecycle automation" sublabel="Consistent handoffs across teams" />
            <KpiCounter label="Adoption that sticks" sublabel="Training + governance by design" />
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              What We Deliver
            </motion.h2>
            <motion.p 
              variants={fadeUpVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Capabilities that transform your customer operations
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              >
                <Card className="h-full rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E52629]/10 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-[#E52629]" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-base text-foreground mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Delivery Options */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="text-center mb-8"
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              Platform options for CRM delivery
            </motion.h2>
          </motion.div>

          {/* Platform chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => scrollToPlatform(platform.id)}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-[#E52629] hover:text-[#E52629] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629]"
              >
                {platform.name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mb-12">
            <Link 
              to="/services/salesforce" 
              className="inline-flex items-center gap-1 text-[#E52629] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] rounded"
            >
              Want Salesforce details only? Visit Salesforce page
              <ArrowRight className="w-3 h-3" />
            </Link>
          </p>

          {/* Platform Sections */}
          <div className="space-y-16">
            {/* Salesforce */}
            <motion.div 
              id="salesforce"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">Salesforce</h3>
              <p className="text-[#E52629] font-medium mb-4">Best for: Enterprise-scale CRM with deep customization and ecosystem extensibility.</p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">What we deliver:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Implementation, configuration & role-based access setup
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Integrations with ERP, email, telephony & data migration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Rollout, training & managed support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => openCalendly()}
                  className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
                >
                  <Link to="/services/salesforce">Go to Salesforce Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Microsoft Dynamics 365 */}
            <motion.div 
              id="dynamics"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">Microsoft Dynamics 365</h3>
              <p className="text-[#E52629] font-medium mb-4">Best for: CRM aligned with Microsoft stack and unified business operations.</p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">What we deliver:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Solution design aligned with your Microsoft ecosystem
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Integrations with Office 365, Power Platform & reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Governance, security & ongoing support
                  </li>
                </ul>
              </div>
              <Button
                onClick={() => openCalendly()}
                className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* HubSpot CRM */}
            <motion.div 
              id="hubspot"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">HubSpot CRM</h3>
              <p className="text-[#E52629] font-medium mb-4">Best for: Fast adoption and marketing-sales alignment with streamlined operations.</p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">What we deliver:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Setup, lifecycle automation & lead routing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Integrations with marketing, sales & service tools
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Enablement, training & adoption programs
                  </li>
                </ul>
              </div>
              <Button
                onClick={() => openCalendly()}
                className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Zoho CRM */}
            <motion.div 
              id="zoho"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">Zoho CRM</h3>
              <p className="text-[#E52629] font-medium mb-4">Best for: Cost-effective CRM with broad suite integration and strong automation.</p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">What we deliver:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Implementation, configuration & workflow automation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Data migration & integration with Zoho suite
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    Training & ongoing optimization
                  </li>
                </ul>
              </div>
              <Button
                onClick={() => openCalendly()}
                className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4"
            >
              Delivery Approach
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliverySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#F9FAFB] rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#E52629] text-white font-bold flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-4">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[#E52629] flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance, Security & Adoption */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-8 text-center"
            >
              Governance, Security & Adoption
            </motion.h2>
            <motion.div 
              variants={fadeUpVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <ul className="grid md:grid-cols-2 gap-4">
                {governanceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
          >
            <motion.h2 
              variants={fadeUpVariants}
              className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-8 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-[#F9FAFB] rounded-xl border-none px-6"
                >
                  <AccordionTrigger className="font-montserrat font-semibold text-left hover:no-underline py-4 text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-20 bg-gradient-to-br from-[#E52629] to-[#D01F21]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to modernize your customer operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start with one team or one journey—prove value fast, then scale safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openCalendly()}
                className="bg-white text-[#E52629] hover:bg-gray-100 font-semibold px-8 py-4 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E52629]"
              >
                Book a Consultation
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E52629] font-semibold px-8 py-4 text-lg focus-visible:ring-2 focus-visible:ring-white"
              >
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}