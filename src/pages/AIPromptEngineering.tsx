import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Shield, Zap, TrendingUp, Target, ArrowRight, ChevronDown, Code2, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToId } from "@/lib/scrollUtils";
import heroImage from "@/assets/hero-prompt-engineering.png";

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
  { id: "playbooks", label: "Playbooks" },
  { id: "faq", label: "FAQ" }
];

const benefits = [
  {
    icon: Target,
    title: "Consistency at scale",
    description: "Deterministic templates, eval gates, rollout policies"
  },
  {
    icon: Zap,
    title: "Faster iteration",
    description: "A/B prompts, offline tests, prompt registries"
  },
  {
    icon: Shield,
    title: "Lower risk",
    description: "Guardrails, jailbreak filters, PII redaction"
  },
  {
    icon: TrendingUp,
    title: "Cost control",
    description: "Token caps, caching, smart model routing"
  }
];

const useCases = [
  "Support bots tuned to brand tone & policy",
  "Knowledge assistants with RAG and citations",
  "Draft/reply generation with style & length controls",
  "Workflow copilots that call tools/APIs safely",
  "Analytics Q&A with guardrails & disclaimers"
];

const capabilities = [
  "Prompt templates with slots/variables & YAML/JSON registries",
  "Retrieval configuration: chunking, embeddings, vector DB",
  "Function/tool schemas (JSON Schema), safe sandboxes",
  "Evals: golden sets, rubric scoring, human-in-the-loop",
  "Observability: tracing, metrics, prompt/version lineage",
  "Rollouts: feature flags, canaries, automatic rollback",
  "Latency & cost budgets; caching & reranking"
];

const sdks = [
  "JS/Python LLM clients & prompt registries",
  "Embeddings & vector stores",
  "Tracing/evals/observability SDKs",
  "Orchestration/runtime adapters (tool-use/agents)"
];

const playbooks = [
  {
    title: "Ship a policy-safe chatbot",
    steps: [
      "Define intents",
      "Craft base prompts",
      "Add guardrails",
      "Wire RAG",
      "Offline evals",
      "Canary",
      "Monitor drift"
    ]
  },
  {
    title: "Harden content generation",
    steps: [
      "Style guide",
      "Templates + few-shot",
      "Length/format controls",
      "Toxicity/PII filters",
      "Batch evals",
      "Rollout"
    ]
  }
];

const faqs = [
  {
    question: "How do you reduce hallucinations?",
    answer: "We implement structured prompts with explicit constraints, retrieval-augmented generation for grounded responses, and multi-stage validation. Our eval frameworks catch factual errors before production, and we maintain human-in-the-loop feedback for continuous improvement."
  },
  {
    question: "How do you evaluate prompt quality?",
    answer: "We use golden test sets with rubric-based scoring, automated metrics (relevance, coherence, safety), and A/B testing frameworks. Every prompt version is tracked with lineage, and we provide dashboards showing quality trends over time."
  },
  {
    question: "How do you handle PII and safety?",
    answer: "Our platform includes PII detection and redaction at ingestion, toxicity/profanity filters, jailbreak detection, and configurable content policies. All processing maintains audit trails for compliance, and we support on-premises deployment for sensitive data."
  },
  {
    question: "Are you locked into specific models or vendors?",
    answer: "No—our prompt registries and SDKs are model-agnostic. You can swap providers, A/B test different models, and implement fallback chains without code changes, maintaining flexibility as the AI landscape evolves."
  }
];

export default function AIPromptEngineering() {
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
        <title>Prompt Engineering Services | Systechnosoft</title>
        <meta 
          name="description" 
          content="Design, test, and govern prompts, context, and tool-use so models deliver consistent, safe results in production. Templates, guardrails, and versioned prompts." 
        />
        <meta name="keywords" content="prompt engineering, LLM prompts, RAG, prompt templates, AI safety, prompt optimization, few-shot learning" />
        <link rel="canonical" href="https://systechnosoft.com/services/ai-prompt-engineering" />
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
                  Get reliable outputs from LLMs—on demand
                </motion.h1>

                <motion.p 
                  variants={fadeUpVariants}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                >
                  Design, test, and govern prompts, context, and tool‑use so models deliver consistent, safe results in production.
                </motion.p>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-3"
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <FileText className="h-4 w-4 mr-2" />
                    Templates & variables
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Shield className="h-4 w-4 mr-2" />
                    Guardrails & safety
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Versioned & testable
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
                    alt="Prompt engineering flow illustration showing template to LLM to evaluation process"
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
              Prompt engineering is a systematic practice involving structured templates, retrieval context, tool/function 
              calls, and evaluation loops that make generative systems dependable. Our focus is on production readiness: 
              versioning, rollbacks, safety filters, and latency budgets. We provide AI technologies and SDKs that enable 
              teams to build, test, and deploy reliable LLM-powered features with confidence.
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
              Make LLMs production-ready with systematic prompt management
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
              Real-world applications of prompt engineering
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
              Complete prompt lifecycle management and governance
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
              Developer-centric prompt engineering tools
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

      {/* Playbooks Section */}
      <section id="playbooks" className="py-16 sm:py-20 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Playbooks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step-by-step workflows for common prompt engineering scenarios
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggeredFadeUp}
            className="max-w-5xl mx-auto space-y-8"
          >
            {playbooks.map((playbook, playbookIndex) => (
              <motion.div
                key={playbookIndex}
                variants={fadeUpVariants}
                className="bg-card border border-border rounded-lg p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">{playbook.title}</h3>
                
                {/* Timeline */}
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden sm:block" />
                  
                  {/* Steps */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 sm:gap-6 relative">
                    {playbook.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex flex-col items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10 flex-shrink-0">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-center text-foreground font-medium leading-tight">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24 scroll-mt-24">
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
              Common questions about prompt engineering
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to operationalize prompts?</h2>
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
