import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#E6E6E6] text-[#1C1C1C]">
                    Predictive & real‑time
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#E6E6E6] text-[#1C1C1C]">
                    Explainable models
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#E6E6E6] text-[#1C1C1C]">
                    SDK‑first integration
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] font-montserrat leading-tight">
                  Turn raw data into real‑time decisions
                </h1>

                <p className="text-lg md:text-xl text-[#3C3C3C] font-inter max-w-2xl">
                  AI‑powered analytics that predict, detect, and explain—integrated directly into your apps and data plane.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-[#E52629] hover:bg-[#E52629]/90 text-white"
                    asChild
                  >
                    <a
                      href="https://calendly.com/systechnosoft-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Consultation
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToId("capabilities")}
                  >
                    See capabilities
                  </Button>
                </div>
              </motion.div>

              {/* Right Column - Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#E6E6E6] bg-white">
                  <img
                    src={heroDataAnalytics}
                    alt="AI Data Analytics visualization showing charts, anomaly detection, and predictions"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>

                {/* Pause/Play Control */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-[#E6E6E6] rounded-full text-xs font-medium text-[#1C1C1C] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E52629] focus:ring-offset-2"
                  aria-pressed={isPaused}
                  aria-label={isPaused ? "Resume animation" : "Pause animation"}
                >
                  {isPaused ? "Play" : "Pause"}
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </HeroBackground>

      {/* Local Section Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#E6E6E6] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-[#1C1C1C]"
              aria-expanded={isNavOpen}
            >
              {sections.find((s) => s.id === activeSection)?.label}
              {isNavOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <div className={`${isNavOpen ? "block" : "hidden"} lg:block absolute lg:relative top-full left-0 right-0 lg:top-auto bg-white lg:bg-transparent border-b lg:border-b-0 border-[#E6E6E6] lg:border-0 shadow-lg lg:shadow-none`}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-6 p-4 lg:p-0">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollToId(section.id);
                      setIsNavOpen(false);
                    }}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded text-left lg:text-center ${
                      activeSection === section.id
                        ? "text-[#E52629] bg-[#E52629]/5 lg:bg-transparent"
                        : "text-[#3C3C3C] hover:text-[#E52629]"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-[#3C3C3C] font-inter leading-relaxed text-center">
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
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#E6E6E6] bg-white group">
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
                className="flex items-start gap-3 p-4 rounded-lg border border-[#E6E6E6] bg-white hover:shadow-md transition-shadow"
              >
                <Activity className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-1" />
                <p className="text-[#3C3C3C] font-inter">{useCase}</p>
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
                  className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#E6E6E6]"
                >
                  <Check className="w-5 h-5 text-[#E52629] flex-shrink-0 mt-0.5" />
                  <span className="text-[#3C3C3C] font-inter">{capability}</span>
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
                  className="p-6 rounded-lg border border-[#E6E6E6] bg-white hover:border-[#E52629]/20 hover:shadow-md transition-all group"
                >
                  <Database className="w-8 h-8 text-[#3C3C3C] group-hover:text-[#E52629] transition-colors mb-3" />
                  <p className="text-[#3C3C3C] font-inter font-medium">{sdk}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#E52629]/[0.03] to-[#007AFF]/[0.03]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-6">
              Ready to make data speak?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#E52629] hover:bg-[#E52629]/90 text-white"
                asChild
              >
                <a
                  href="https://calendly.com/systechnosoft-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Talk to an expert</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] font-montserrat mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-[#E6E6E6] bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] font-montserrat mb-3">
                  {faq.q}
                </h3>
                <p className="text-[#3C3C3C] font-inter leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
