import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Code2, Shield, Activity, Zap, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToId } from "@/lib/scrollUtils";
import heroImage from "@/assets/hero-ai-development.png";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggeredFadeUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "benefits", label: "Benefits" },
  { id: "use-cases", label: "Use Cases" },
  { id: "capabilities", label: "Capabilities" },
  { id: "sdks", label: "SDKs" },
  { id: "faq", label: "FAQ" }
];

const benefits = [
  {
    icon: Zap,
    title: "Faster to production",
    description: "From prototype to ship with CI-friendly SDKs"
  },
  {
    icon: Shield,
    title: "Secure by design",
    description: "Secrets, PII handling, audit trails"
  },
  {
    icon: Activity,
    title: "Observable",
    description: "Tracing, evals, fallbacks, human-in-the-loop"
  },
  {
    icon: Code2,
    title: "Cost-efficient",
    description: "Caching, token control, model routing"
  }
];

const useCases = [
  "AI-assisted workflows & copilots inside web/mobile apps",
  "Retrieval-augmented Q&A over product docs & knowledge bases",
  "Smart routing, classification, and summarization in pipelines",
  "Generative content blocks (drafts, replies, outlines) with guardrails"
];

const capabilities = [
  "API & event-driven integration (REST, webhooks, queues)",
  "RAG pipeline design (chunking, embeddings, vector DB)",
  "Tool-use/agent patterns with safe sandboxes",
  "Evals, monitoring, red-teaming, safety filters",
  "CI/CD for prompts and configs; feature flags"
];

const sdks = [
  "Python & JS client SDKs for LLMs",
  "Embeddings & vector stores",
  "Observability SDKs (tracing/evals)",
  "Orchestration/runtime adapters"
];

const faqs = [
  {
    question: "How do you ensure data security?",
    answer: "We implement end-to-end encryption, PII handling protocols, and comprehensive audit trails. All data flows through secure, isolated environments with role-based access controls and compliance with industry standards."
  },
  {
    question: "What are your typical latency and SLAs?",
    answer: "Our production deployments typically achieve sub-200ms response times for most AI operations. We offer customized SLAs based on your requirements, with 99.9% uptime guarantees for enterprise clients."
  },
  {
    question: "How do you handle model selection and updates?",
    answer: "We maintain vendor-agnostic integrations that allow flexible model routing and A/B testing. Our platform supports seamless model updates and fallbacks to ensure continuous service availability."
  },
  {
    question: "How do you control AI costs?",
    answer: "We implement intelligent caching, token optimization, and cost monitoring dashboards. Our architecture includes request batching, semantic caching, and configurable rate limits to keep costs predictable and scalable."
  }
];

export default function AIDevelopmentIntegration() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("overview");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Development & Integration Services | Systechnosoft</title>
        <meta 
          name="description" 
          content="Ship production-grade AI features and integrate them with your apps, data, and workflows—securely and fast. SDK-first approach with governance-ready solutions." 
        />
        <meta name="keywords" content="AI development, AI integration, machine learning, LLM integration, RAG, AI APIs, enterprise AI" />
        <link rel="canonical" href="https://systechnosoft.com/services/ai-development-integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-animated relative overflow-hidden">
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

        {/* Content */}
        <div className="hero-animated__content relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <motion.div
                variants={staggeredFadeUp}
                initial="hidden"
                animate="visible"
                className="space-y-6 lg:space-y-8"
              >
                <motion.h1 
                  variants={fadeUpVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                >
                  Build, embed, and scale AI in your stack
                </motion.h1>

                <motion.p 
                  variants={fadeUpVariants}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                >
                  Ship production‑grade AI features and integrate them with your apps, data, and workflows—securely and fast.
                </motion.p>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-3"
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    SDK‑first approach
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Zap className="h-4 w-4 mr-2" />
                    Low‑latency integration
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Shield className="h-4 w-4 mr-2" />
                    Governance‑ready
                  </Badge>
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button 
                    size="lg" 
                    asChild
                    className="text-base"
                  >
                    <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => scrollToId('capabilities')}
                    className="text-base"
                  >
                    See capabilities
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <img 
                    src={heroImage} 
                    alt="AI Development and Integration illustration showing connected building blocks and nodes"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Local Section Nav */}
      <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="lg:hidden w-full py-4 flex items-center justify-between text-sm font-medium"
            aria-expanded={isNavOpen}
          >
            <span>Navigate Sections</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isNavOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Nav Items */}
          <ul className={`
            lg:flex lg:items-center lg:gap-8 lg:py-0
            ${isNavOpen ? 'block pb-4' : 'hidden lg:flex'}
          `}>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollToId(id);
                    setIsNavOpen(false);
                  }}
                  className={`
                    block py-3 lg:py-4 text-sm font-medium transition-colors
                    ${activeSection === id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on AI feature development and seamless integration into existing products, APIs, and data planes. 
              Our SDK-first approach enables teams to ship production-ready AI capabilities quickly while maintaining 
              security, observability, and cost control across the entire AI lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accelerate your AI journey with production-ready infrastructure
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications of our AI development expertise
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground">{useCase}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 sm:py-20 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI development and integration services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="flex gap-3 p-5 rounded-lg bg-card border border-border"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground font-medium">{capability}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDKs Section */}
      <section id="sdks" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">SDKs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developer-centric tools and integrations
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-lg border-2 border-border bg-card hover:border-primary/40 transition-all duration-300 text-center"
                >
                  <Code2 className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-medium text-foreground">{sdk}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our AI development services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to ship AI features?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com/systechnosoft-info/30min" target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  Talk to an expert
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
