import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { BookConsultationTrigger } from "@/components/consultation/BookConsultationTrigger";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Code2, Shield, Activity, Zap, ArrowRight, ChevronDown, GitBranch } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToId } from "@/lib/scrollUtils";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-ai-development.avif";

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
  {
    icon: Code2,
    title: "API & event-driven integration",
    description: "REST, webhooks, queues"
  },
  {
    icon: Activity,
    title: "RAG pipeline design",
    description: "Chunking, embeddings, vector DB"
  },
  {
    icon: Shield,
    title: "Tool-use/agent patterns",
    description: "Safe sandboxes"
  },
  {
    icon: Zap,
    title: "Evals, monitoring, red-teaming",
    description: "Safety filters"
  },
  {
    icon: Sparkles,
    title: "CI/CD for prompts and configs",
    description: "Feature flags"
  },
  {
    icon: GitBranch,
    title: "Model Ops & Governance",
    description: "Prompt registry, rollout controls, canary releases"
  }
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
      <section className="hero-animated relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white py-24">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1200px] mx-auto">
              
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
                  aria-label="Key benefits"
                >
                  {["SDK‑first approach", "Low‑latency integration", "Governance‑ready"].map((badge, idx) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.35 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm px-4 py-2 bg-white/80 border-[#E6E6E6] text-[#1C1C1C] hover:shadow-sm transition-shadow"
                      >
                        {badge}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-col sm:flex-row gap-3 pt-4"
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToId('benefits')}
                    className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    See what we deliver →
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold"
                  >
                    <Link to="/contact?type=mra">Claim your free insight</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Image */}
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="ai-dev-hero__art relative isolate group"
              >
                <img 
                  src={heroImage}
                  width={1270}
                  height={847}
                  alt="AI Development and Integration platform showing connected building blocks and intelligent automation"
                  className="w-full h-auto rounded-2xl border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.06)] object-cover transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
                  loading="eager"
                  decoding="async"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
                {/* Subtle brand glow */}
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -inset-3 rounded-[22px] blur-lg opacity-[.18] -z-10"
                  style={{
                    background: `radial-gradient(40% 40% at 20% 30%, #E52629 10%, transparent 70%), radial-gradient(35% 35% at 80% 70%, #9333EA 10%, transparent 70%)`
                  }}
                />
              </motion.figure>

            </div>
        </div>
      </section>

      {/* Local Section Nav */}
      <nav className="hidden lg:block sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center overflow-x-auto py-4 space-x-8 scrollbar-hide">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={cn(
                  "flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200",
                  activeSection === id
                    ? "bg-[#E52629] text-white shadow-md"
                    : "text-gray-600 hover:text-[#E52629] hover:bg-gray-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>
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
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">{useCase}</p>
                  </CardContent>
                </Card>
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <capability.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {sdks.map((sdk, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 shadow-md hover:shadow-lg text-center">
                  <CardContent className="p-6">
                    <Code2 className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="font-medium text-foreground">{sdk}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#F5F5F5] scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1C1C1C] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-white border border-[#E6E6E6] rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-[#1C1C1C] hover:text-[#E52629] hover:no-underline">
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

      {/* CTA Band */}
      <section className="py-20 bg-[#E52629] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
            Ready to ship AI features?
          </h2>
          <p className="font-inter text-xl text-white/95 mb-10">
            Let's discuss your AI requirements and create a tailored plan.
          </p>
          
          <div className="flex justify-center">
            <BookConsultationTrigger 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#E52629] hover:shadow-md focus-visible:ring-2 focus-visible:ring-white px-8 py-4 text-lg font-semibold transition-all"
            >
              Book a consultation
            </BookConsultationTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
