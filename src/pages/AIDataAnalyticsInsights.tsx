import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HeroBackground } from "@/components/HeroMotionSystem";
import { motion } from "framer-motion";
import { scrollToId } from "@/lib/scrollUtils";
import heroDataAnalytics from "@/assets/hero-data-analytics.png";
import { 
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Shield,
  Database,
  Zap,
  Activity,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
} from "lucide-react";

export default function AIDataAnalyticsInsights() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "use-cases", label: "Use Cases" },
    { id: "capabilities", label: "Capabilities" },
    { id: "sdks", label: "SDKs" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Faster time‑to‑insight",
      description: "Streaming & incremental pipelines",
    },
    {
      icon: TrendingUp,
      title: "Predict the next step",
      description: "Forecasting & propensity models",
    },
    {
      icon: Shield,
      title: "Trust the output",
      description: "Explainability, drift checks, alerts",
    },
    {
      icon: BarChart3,
      title: "Lower TCO",
      description: "Caching, model routing, cost budgets",
    },
  ];

  const useCases = [
    "Real‑time dashboards with anomaly alerts",
    "Demand forecasting & capacity planning",
    "Churn & propensity scoring embedded in CRM",
    "Risk/fraud signals for approvals/holds",
    "Operations KPIs with intelligent thresholds",
    "Real-time KPI alerts in BI dashboards",
  ];

  const capabilities = [
    "Ingestion: batch (files/DB) & streaming (events/queues)",
    "Feature store, sliding windows, time‑series transforms",
    "Models: anomaly detection, forecasting, classification",
    "Online inference with low‑latency caches & fallbacks",
    "Explainability (SHAP‑style), monitoring & drift detection",
    "CI/CD for pipelines; evals with golden sets",
  ];

  const sdks = [
    "Python/JS client SDKs for inference & scoring",
    "Time‑series & anomaly algorithms",
    "Embeddings/vector stores for semantic joins",
    "Observability SDKs (tracing, metrics, alerts)",
  ];

  const faqs = [
    {
      q: "What data connectors do you support?",
      a: "We integrate with major databases (PostgreSQL, MySQL, MongoDB), data warehouses (Snowflake, BigQuery), and streaming platforms (Kafka, Kinesis). Custom connectors can be built for proprietary systems.",
    },
    {
      q: "What are the streaming latency targets?",
      a: "Our real-time pipelines typically achieve sub-second latency for anomaly detection and scoring. Batch forecasting runs complete within minutes for most datasets.",
    },
    {
      q: "How do you ensure model explainability?",
      a: "We use SHAP-style feature attribution, confidence scores, and decision reasoning. Every prediction includes context about which features drove the result and how confident the model is.",
    },
    {
      q: "How do you control alert fatigue?",
      a: "Smart thresholds adapt to historical patterns, alerts are deduplicated and grouped, and we support configurable severity levels with automated escalation rules to reduce noise.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Analytics & Insights | Systechnosoft</title>
        <meta
          name="description"
          content="Turn raw data into real‑time decisions with AI‑powered analytics. Predictive models, anomaly detection, and explainable insights integrated directly into your apps."
        />
        <meta
          name="keywords"
          content="AI analytics, predictive analytics, real-time insights, anomaly detection, data science, machine learning"
        />
        <link rel="canonical" href="https://systechnosoft.com/services/ai-data-analytics-insights" />
      </Helmet>

      {/* Hero Section */}
      <HeroBackground className="ai-analytics-hero" fullHeight={true}>
        <section className="relative py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 max-w-[44rem]"
              >
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] font-montserrat leading-tight">
                    Turn raw data into real‑time decisions
                  </h1>

                  <p className="text-lg md:text-xl text-[#3C3C3C] leading-relaxed max-w-prose">
                    AI‑powered analytics that predict, detect, and explain—integrated directly into your apps and data plane.
                  </p>
                </div>

                {/* USP Pill Chips */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="flex flex-wrap gap-3"
                  aria-label="Key benefits"
                >
                  {["Predictive & real‑time", "Explainable models", "SDK‑first integration"].map((badge, idx) => (
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

                {/* CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#D01F21] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 active:scale-[0.99]"
                    onClick={() => scrollToId('benefits')}
                  >
                    See what we deliver →
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors duration-200 px-8 py-4 text-lg font-semibold"
                  >
                    <a href="/contact?type=mra">
                      Claim your free insight
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Hero Visual */}
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative isolate group"
              >
                <img
                  src={heroDataAnalytics}
                  alt="AI Data Analytics visualization showing charts, anomaly detection, and predictions"
                  className="w-full h-auto rounded-2xl border border-[#E6E6E6] shadow-[0_10px_30px_rgba(0,0,0,0.06)] object-cover transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-6px] group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
                  loading="eager"
                />
                <span 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -inset-3 rounded-[22px] blur-lg opacity-[.18] -z-10"
                  style={{
                    background: `radial-gradient(40% 40% at 20% 30%, #E52629 10%, transparent 70%), radial-gradient(35% 35% at 80% 70%, #007AFF 10%, transparent 70%)`
                  }}
                />
              </motion.figure>
            </div>
          </div>
        </section>
      </HeroBackground>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center overflow-x-auto py-4 space-x-8 scrollbar-hide">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={`
                  flex-shrink-0 font-inter font-medium text-sm px-4 py-2 rounded-full transition-all duration-200
                  ${activeSection === id
                    ? 'bg-[#E52629] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#E52629] hover:bg-gray-100'
                  }
                `}
                aria-current={activeSection === id ? "true" : undefined}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This page focuses on <strong>AI analytics technologies & SDKs</strong>: batch and stream ingestion, feature engineering, time‑series models, anomaly detection, forecasting, and explainability. We emphasize light, embeddable components that surface insights inside existing apps and BI flows, enabling teams to make data‑driven decisions in real time with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 bg-gradient-to-b from-white to-[#E52629]/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-4">
              Why Choose Our Analytics
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 bg-white group">
                  <benefit.icon className="w-10 h-10 text-[#E52629] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-[#1C1C1C] font-montserrat mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#3C3C3C] font-inter">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-4">
              Use Cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-1" />
                      <p className="text-[#3C3C3C] font-inter">{useCase}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 md:py-20 bg-gradient-to-b from-white to-[#007AFF]/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-4">
              Capabilities
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3C3C3C] font-inter">{capability}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section id="sdks" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-4">
              SDKs & Tools
            </h2>
            <p className="text-[#3C3C3C] font-inter max-w-2xl mx-auto">
              Developer-first tooling for seamless integration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <Database className="w-8 h-8 text-[#3C3C3C] group-hover:text-[#E52629] transition-colors mb-3" />
                      <p className="text-[#3C3C3C] font-inter font-medium">{sdk}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
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
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#3C3C3C]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Ready to make data speak? */}
      <section id="cta-final" className="py-20 bg-[#E52629] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">
            Ready to make data speak?
          </h2>
          <p className="font-inter text-xl text-white/95 mb-10">
            Let's discuss how AI-powered analytics can transform your decision-making process and drive measurable outcomes.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://calendly.com/systechnosoft-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#E52629] hover:bg-gray-50 px-10 py-4 text-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E52629]"
              >
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
