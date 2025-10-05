import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Shield, Zap, TrendingUp, MessageSquare, ArrowRight, ChevronDown, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToId } from "@/lib/scrollUtils";
import heroImage from "@/assets/hero-nlp.png";

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
    title: "Faster decisions",
    description: "Surface key facts from long text in seconds"
  },
  {
    icon: TrendingUp,
    title: "Lower ops cost",
    description: "Automate tagging, routing, summaries"
  },
  {
    icon: MessageSquare,
    title: "Better CX",
    description: "Real-time sentiment & intent for responses"
  },
  {
    icon: Shield,
    title: "Governed & safe",
    description: "PII redaction, toxicity filters, audit logs"
  }
];

const useCases = [
  "AI assistants for support & internal knowledge",
  "Summarization of tickets, chats, calls, docs",
  "Sentiment/intent classification at scale",
  "Entity/keyword extraction for analytics",
  "Speech-to-text notes, topical clustering"
];

const capabilities = [
  "Text & speech ingestion (streaming + batch)",
  "Tokenization, POS/NER, dependency parsing",
  "Semantic search & RAG (chunking, embeddings, vector DB)",
  "Guardrails: PII masking, profanity/toxicity, jailbreak filters",
  "Evaluation & monitoring (latency, accuracy, drift)",
  "CI/CD for prompts/configs; feature flags & rollback"
];

const sdks = [
  "Tokenizers & transformers (JS/Python)",
  "Embeddings & vector stores",
  "Speech-to-text & text-to-speech adapters",
  "Tracing/evals/observability SDKs"
];

const faqs = [
  {
    question: "How do you ensure data privacy in NLP workflows?",
    answer: "We implement PII detection and masking at ingestion, use encrypted storage and transmission, and provide granular access controls. All processing can be done on-premises or in your private cloud with full audit trails for compliance."
  },
  {
    question: "Can we choose or swap NLP models?",
    answer: "Yes, our platform is model-agnostic and supports multiple providers. You can A/B test models, implement fallback chains, and swap models without code changes through configuration."
  },
  {
    question: "How do you evaluate NLP accuracy?",
    answer: "We provide continuous evaluation frameworks with metrics dashboards, human-in-the-loop validation workflows, and automated regression testing. You can track precision, recall, F1 scores, and domain-specific KPIs in real-time."
  },
  {
    question: "What latency can we expect?",
    answer: "Most NLP operations complete in under 200ms with our optimized pipelines. Speech-to-text typically runs at 0.8-1.2x real-time, while text processing is near-instant. We provide SLAs based on your specific requirements."
  }
];

export default function AINaturalLanguageProcessing() {
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
        <title>Natural Language Processing (NLP) Services | Systechnosoft</title>
        <meta 
          name="description" 
          content="Understand, summarize, and act on text & speech using production-grade NLP primitives and SDKs. Privacy-first, low-latency NLP pipelines." 
        />
        <meta name="keywords" content="natural language processing, NLP, text analysis, speech recognition, sentiment analysis, entity extraction, RAG, embeddings" />
        <link rel="canonical" href="https://systechnosoft.com/services/ai-natural-language-processing" />
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
                  Turn language into live business signals
                </motion.h1>

                <motion.p 
                  variants={fadeUpVariants}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
                >
                  Understand, summarize, and act on text & speech using production‑grade NLP primitives and SDKs.
                </motion.p>

                <motion.div 
                  variants={fadeUpVariants}
                  className="flex flex-wrap gap-3"
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Tokenization to insights
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Zap className="h-4 w-4 mr-2" />
                    Low‑latency pipelines
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy‑first NLP
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
                    alt="Natural Language Processing flow illustration showing text and speech transformation into insights"
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
              We provide NLP technologies and SDKs covering text and speech ingestion, processing—including tokenization, 
              tagging, and parsing—embeddings for RAG, and safe generation. Our platform emphasizes privacy-first design 
              and governance alignment, enabling teams to extract actionable insights from unstructured language data 
              while maintaining compliance and security standards.
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
              Transform unstructured language into structured business value
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
              Real-world applications of NLP technology
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
              Comprehensive NLP pipeline and governance features
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
              Developer-centric NLP tools and integrations
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
              Common questions about our NLP services
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to build NLP into your product?</h2>
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
