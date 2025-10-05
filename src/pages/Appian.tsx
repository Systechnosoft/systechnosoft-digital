import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, 
  Workflow, 
  Database, 
  Bot, 
  FileText, 
  Globe, 
  Shield,
  Zap,
  Target,
  Clock,
  Activity,
  CheckCircle2,
  LineChart,
  Lock,
  Rocket,
  Users,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CountUpNumber } from "@/components/CountUpNumber";
import { HeroFlipCarousel } from "@/components/HeroFlipCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Appian() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "approach", label: "Approach" },
    { id: "integrations", label: "Integrations" },
    { id: "insights", label: "Insights" },
    { id: "why-us", label: "Why Us" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const heroCapabilities = [
    { id: "process", icon: Workflow, title: "Process Orchestration", description: "BPMN designer, human & system tasks" },
    { id: "data", icon: Database, title: "Data Fabric", description: "Real-time unified data across systems" },
    { id: "ai", icon: Bot, title: "AI & Automation", description: "Copilot, RPA, process mining" },
    { id: "idp", icon: FileText, title: "IDP (Document AI)", description: "Classify & extract structured data" },
    { id: "portals", icon: Globe, title: "Portals & Experiences", description: "Secure public & internal apps" },
    { id: "devops", icon: Shield, title: "DevOps & Governance", description: "CI/CD, audit, access controls" },
  ];

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
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

  const platformCapabilities = [
    {
      icon: Workflow,
      title: "Process Modeling",
      description: "Drag-and-drop BPMN, human/system tasks"
    },
    {
      icon: Database,
      title: "Data Fabric",
      description: "Virtualize data for real-time views"
    },
    {
      icon: Bot,
      title: "RPA & Integrations",
      description: "Attended/unattended bots, REST/SOAP, JDBC, Kafka"
    },
    {
      icon: Zap,
      title: "AI & Process Mining",
      description: "Copilot guidance, insights, optimization"
    },
    {
      icon: FileText,
      title: "IDP (Document AI)",
      description: "OCR, classify, extract; reduce manual entry"
    },
    {
      icon: Globe,
      title: "Portals & Mobile",
      description: "External/internal sites, theming, SSO"
    },
  ];

  const deliverySteps = [
    {
      number: "1",
      title: "Discover",
      description: "Goals, process maps, value targets"
    },
    {
      number: "2",
      title: "Prototype",
      description: "Rapid UX flows, integration stubs"
    },
    {
      number: "3",
      title: "Build & Test",
      description: "Incremental releases, automated tests"
    },
    {
      number: "4",
      title: "Launch & Operate",
      description: "SLOs, observability, runbooks"
    },
  ];

  const integrations = [
    "Data Fabric",
    "Process Mining",
    "IDP",
    "RPA",
    "Kafka",
    "MuleSoft",
    "Salesforce",
    "SAP",
    "Microsoft 365",
    "DocuSign",
    "ServiceNow",
    "Tableau",
  ];

  const caseStudies = [
    {
      metric: "40%",
      title: "faster workflows",
      description: "Global bank; low-code apps replaced legacy",
      color: "bg-[#E52629]"
    },
    {
      metric: "30%",
      title: "ops efficiency",
      description: "Oil & Gas; automated workforce processes",
      color: "bg-[#007AFF]"
    },
    {
      metric: "50%",
      title: "faster intercompany processing",
      description: "UK FS; standardized approvals",
      color: "bg-[#34C759]"
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Fewer fires, more focus",
      description: "We run the day-to-day so you ship features"
    },
    {
      icon: Lock,
      title: "Security first",
      description: "Guardrails by default; audit-ready"
    },
    {
      icon: Activity,
      title: "Predictable ops",
      description: "Runbooks, SLOs, clear escalation"
    },
    {
      icon: LineChart,
      title: "Costs under control",
      description: "Optimize spend without slowing delivery"
    },
  ];

  const faqs = [
    {
      question: "How fast can we ship MVPs on Appian?",
      answer: "6–8 weeks is typical for a well-scoped MVP with clear requirements and stakeholder alignment."
    },
    {
      question: "Where does Appian run?",
      answer: "Appian Cloud or your cloud (AWS/Azure/GCP) or hybrid deployment models are all supported."
    },
    {
      question: "How do you handle integrations?",
      answer: "API-first approach with prebuilt connectors and event streams for seamless system integration."
    },
    {
      question: "How do you secure data?",
      answer: "RBAC, SSO, encryption, audit logs with compliant delivery following industry best practices."
    },
    {
      question: "Do you migrate from legacy systems?",
      answer: "Yes: identity/content/data/app migrations with zero-downtime strategies and rollback plans."
    },
    {
      question: "What does success look like?",
      answer: "Measurable KPIs including cycle time reduction, error rate improvement, and CSAT scores."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Appian Services — Low-Code Automation, Process, Data & AI | Systechnosoft</title>
        <meta name="description" content="Design, build, and run enterprise apps faster with Appian. Process orchestration, Data Fabric, RPA, IDP, and AI—implemented by certified engineers with secure, compliant delivery." />
        <meta property="og:title" content="Appian Services — Low-Code Automation, Process, Data & AI | Systechnosoft" />
        <meta property="og:description" content="Design, build, and run enterprise apps faster with Appian. Process orchestration, Data Fabric, RPA, IDP, and AI—implemented by certified engineers with secure, compliant delivery." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://systechnosoft.com/services/appian" />
      </Helmet>

      {/* Sticky Section Navigation */}
      <nav className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === id
                    ? "bg-[#E52629] text-white"
                    : "text-[#3C3C3C] hover:bg-[#F5F5F5]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="hero-animated relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="hero-animated__bg">
          <div className="hero-animated__bg-glow" />
          {!shouldReduceMotion && (
            <motion.div
              className="hero-animated__bg-rotation"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggeredFadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Copy */}
            <div className="space-y-6">
              <motion.h1 variants={fadeUpVariants} className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Appian done right—secure, efficient, production-ready
              </motion.h1>
              
              <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Plan, build, and run on Appian with unified <strong>process, data, and AI</strong>—so your teams can ship outcomes faster with governance built in.
              </motion.p>

              <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Low-code speed
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Process + Data in one
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Security & compliance
                </Badge>
              </motion.div>

              <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Get an Appian Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-semibold"
                  asChild
                >
                  <Link to="#capabilities">See what we deliver</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Content - 3D Flip Carousel */}
            <motion.div variants={fadeUpVariants}>
              <HeroFlipCarousel 
                cards={heroCapabilities}
                autoRotateDelay={3000}
                pauseDuration={10000}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Appian + Systechnosoft - Metric Pills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Why Appian + Systechnosoft
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E52629] mb-2">
                <CountUpNumber end={12} duration={1400} suffix=" weeks" />
              </div>
              <p className="text-[#3C3C3C] text-sm">Pilot to production</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#E52629] mb-2">
                <CountUpNumber end={30} duration={1400} suffix="%" />
              </div>
              <p className="text-[#3C3C3C] text-sm">Operational efficiency gains</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#E52629] mb-2">
                <CountUpNumber end={99.95} duration={1400} suffix="%" startSeed={99} />
              </div>
              <p className="text-[#3C3C3C] text-sm">Uptime targets with managed ops</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#E52629] mb-2">
                2h
              </div>
              <p className="text-[#3C3C3C] text-sm">P1 incident response SLA</p>
            </div>
          </div>

          <p className="text-center text-sm text-[#3C3C3C] mt-8">
            Certified engineers, clear runbooks, security guardrails.
          </p>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="capabilities" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {platformCapabilities.map((capability, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#E52629]/10 flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-[#E52629]" />
                  </div>
                  <CardTitle className="text-lg font-montserrat font-bold text-[#1C1C1C]">
                    {capability.title}
                  </CardTitle>
                  <CardDescription className="text-[#3C3C3C]">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-[#3C3C3C] bg-white rounded-lg py-3 px-4 border border-[#E6E6E6]">
            Governance, audit, RBAC, and CI/CD are first-class.
          </p>
        </div>
      </section>

      {/* Our Delivery Approach */}
      <section id="approach" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Our Delivery Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E52629] text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-[#1C1C1C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#3C3C3C]">
                    {step.description}
                  </p>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#E6E6E6]" />
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#3C3C3C] mt-12">
            Agile sprints, design reviews, and security gates each cycle.
          </p>
        </div>
      </section>

      {/* Accelerators & Integrations */}
      <section id="integrations" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Accelerators & Integrations
          </h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-3 min-w-max justify-center flex-wrap">
              {integrations.map((integration, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white text-[#3C3C3C] border border-[#E6E6E6] hover:border-[#E52629] hover:text-[#E52629] transition-colors"
                >
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights - Case Study Carousel */}
      <section id="insights" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Insights
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full ${study.color} text-white flex items-center justify-center text-2xl font-bold mb-4`}>
                        {study.metric}
                      </div>
                      <CardTitle className="text-xl font-montserrat font-bold text-[#1C1C1C]">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-[#3C3C3C]">
                        {study.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-white border-2 border-[#E52629] text-[#E52629] hover:bg-[#FFE5E6] hover:border-[#E31B23] hover:text-[#B1141A] px-8 py-3"
              asChild
            >
              <Link to="/case-studies?tag=appian">
                View case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Systechnosoft */}
      <section id="why-us" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Why Choose Systechnosoft
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#E52629]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#E52629]" />
                  </div>
                  <CardTitle className="text-lg font-montserrat font-bold text-[#1C1C1C]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-[#3C3C3C]">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-center text-[#1C1C1C] mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#E6E6E6] rounded-lg px-6">
                <AccordionTrigger className="text-left font-montserrat font-semibold text-[#1C1C1C] hover:text-[#E52629]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#3C3C3C]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#E52629]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to accelerate your Appian journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss a roadmap to ship measurable outcomes fast—safely and at scale.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#E52629] hover:bg-white/90 px-8 py-6 text-base font-semibold"
            asChild
          >
            <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
