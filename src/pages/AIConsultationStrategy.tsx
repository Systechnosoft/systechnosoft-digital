import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Brain, Shield, TrendingUp, DollarSign, Target, FileCheck, Database, Lock, Workflow } from "lucide-react";
import { HeroMotionSystem, HeroBackground } from "@/components/HeroMotionSystem";
import { scrollToId } from "@/lib/scrollUtils";
import heroImage from "@/assets/hero-consultation-strategy.png";

const heroCards = [
  {
    icon: "🎯",
    title: "Readiness → roadmap",
    benefit: "Assess gaps, prioritize opportunities, and build an executable plan"
  },
  {
    icon: "🛡️",
    title: "Governance & risk",
    benefit: "Security, privacy, and compliance frameworks from day one"
  },
  {
    icon: "🔓",
    title: "Vendor‑agnostic",
    benefit: "Multi‑model strategy with no platform lock‑in"
  }
];

export default function AIConsultationStrategy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "benefits", "use-cases", "capabilities", "sdks", "faq"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Faster path to value",
      description: "Prioritize high‑ROI use cases"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Lower risk",
      description: "Security, privacy, and compliance first"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Clear build plan",
      description: "Milestones, SLAs/SLOs, owners"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Cost control",
      description: "Model routing, caching, usage budgets"
    }
  ];

  const useCases = [
    "AI roadmap for assistants, RAG, and analytics",
    "Feasibility/ROI scoring for candidate use cases",
    "Data readiness & architecture gaps closure",
    "Safety/guardrails policy for generation & tools",
    "Multi‑model policy to avoid lock‑in"
  ];

  const capabilities = [
    "Readiness assessment (data, security, infra, talent)",
    "Feasibility & ROI modeling; risk register",
    "Use‑case selection and phasing (pilot → scale)",
    "Governance: privacy/PII, safety filters, audit trails",
    "Technical blueprint: RAG, evals, observability, CI/CD for prompts/configs",
    "SLAs/SLOs, latency budgets, rollout & rollback plans"
  ];

  const sdks = [
    "Prompt registries & versioning",
    "Embeddings & vector stores for RAG",
    "Observability & eval SDKs (tracing, metrics)",
    "Orchestration/runtime adapters (tool‑use/agents)"
  ];

  const faqs = [
    {
      question: "What's the typical roadmap timeline?",
      answer: "Most roadmaps span 3–6 months from assessment to initial pilot launch, with scaling phases extending 6–12 months. Timelines vary based on organizational readiness, data availability, and governance requirements."
    },
    {
      question: "How do you handle governance & compliance?",
      answer: "We embed privacy/PII controls, safety filters, and audit trails from day one. Our framework aligns with GDPR, SOC 2, and industry‑specific regulations, ensuring AI systems meet compliance standards before production."
    },
    {
      question: "How do you avoid vendor lock‑in?",
      answer: "We design multi‑model strategies using open SDKs and standardized interfaces. This allows you to switch providers, test competing models, and leverage best‑of‑breed components without rewriting core logic."
    },
    {
      question: "How do you measure ROI?",
      answer: "We establish baseline metrics (cost, time, quality) and track improvements post‑deployment. ROI includes cost savings from automation, revenue from new capabilities, and risk reduction from fewer errors or compliance issues."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Consultation & Strategy | Systechnosoft</title>
        <meta name="description" content="Plan AI that ships and scales. Define vision, governance, and build path—from pilot to production—using proven, SDK‑first patterns." />
        <meta name="keywords" content="AI strategy, AI consultation, AI roadmap, AI governance, AI planning, technology consulting" />
        <link rel="canonical" href="https://www.systechnosoft.com/services/ai-consultation-strategy" />
        <meta property="og:title" content="AI Consultation & Strategy | Systechnosoft" />
        <meta property="og:description" content="Plan AI that ships and scales with proven SDK‑first patterns and governance frameworks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.systechnosoft.com/services/ai-consultation-strategy" />
      </Helmet>

      <HeroBackground fullHeight={true}>
        <section className="container mx-auto px-4 py-20 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] mb-4 font-montserrat">
                Plan AI that ships and scales
              </h1>
              <p className="text-lg md:text-xl text-[#3C3C3C] mb-6 font-inter">
                Define vision, governance, and build path—from pilot to production—using proven, SDK‑first patterns.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-full text-sm text-[#1C1C1C] font-medium">
                  Readiness → roadmap
                </span>
                <span className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-full text-sm text-[#1C1C1C] font-medium">
                  Governance & risk
                </span>
                <span className="px-4 py-2 bg-white border border-[#E6E6E6] rounded-full text-sm text-[#1C1C1C] font-medium">
                  Vendor‑agnostic
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open("https://calendly.com/systechnosoft-info/30min", "_blank")}
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToId("capabilities")}
                  className="border-[#E6E6E6] hover:bg-[#F5F5F5]"
                >
                  See framework
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <HeroMotionSystem cards={heroCards} ariaLabel="AI Consultation & Strategy highlights" />
            </motion.div>
          </div>
        </section>
      </HeroBackground>

      <nav className="sticky top-0 z-40 bg-white border-b border-[#E6E6E6] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-6 scrollbar-hide">
            {[
              { id: "overview", label: "Overview" },
              { id: "benefits", label: "Benefits" },
              { id: "use-cases", label: "Use Cases" },
              { id: "capabilities", label: "Capabilities" },
              { id: "sdks", label: "SDKs" },
              { id: "faq", label: "FAQ" }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 border-b-2 ${
                  activeSection === id
                    ? "text-primary border-primary"
                    : "text-[#3C3C3C] border-transparent hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6 font-montserrat">Overview</h2>
            <p className="text-lg text-[#3C3C3C] font-inter leading-relaxed">
              Consultation & Strategy focuses on AI adoption planning, governance, and technical blueprinting—without vendor lock‑in. 
              It covers readiness assessment, opportunity selection, feasibility, risk & compliance, data/infra prerequisites, and a 
              build plan that leverages modern AI SDKs (prompts/registries, RAG, evals, observability) to reach production faster and safer.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-gradient-to-br from-white via-[#F8F9FA] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">Benefits</h2>
            <p className="text-lg text-[#3C3C3C] font-inter">Strategic advantages of structured AI planning</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#E52629] transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2 font-montserrat">{benefit.title}</h3>
                    <p className="text-[#3C3C3C] font-inter">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">Use Cases</h2>
            <p className="text-lg text-[#3C3C3C] font-inter">Common strategic planning scenarios</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-white border border-[#E6E6E6] rounded-lg hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[#3C3C3C] font-inter">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-16 bg-gradient-to-br from-white via-[#F8F9FA] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">Capabilities</h2>
            <p className="text-lg text-[#3C3C3C] font-inter">Comprehensive strategic planning framework</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white border border-[#E6E6E6] rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[#3C3C3C] font-inter">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sdks" className="py-16 bg-white border-t border-[#E6E6E6]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">SDKs</h2>
            <p className="text-lg text-[#3C3C3C] font-inter">Modern tooling for implementation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white border border-[#E6E6E6] rounded-lg hover:border-primary/20 hover:shadow-md transition-all"
              >
                <Workflow className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-[#3C3C3C] font-inter font-medium">{sdk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-white via-[#F8F9FA] to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">
              Ready to shape your AI strategy?
            </h2>
            <p className="text-lg text-[#3C3C3C] mb-8 font-inter">
              Let's design a roadmap that delivers value, manages risk, and scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open("https://calendly.com/systechnosoft-info/30min", "_blank")}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "/contact"}
                className="border-[#E6E6E6] hover:bg-[#F5F5F5]"
              >
                Talk to an expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4 font-montserrat">FAQ</h2>
            <p className="text-lg text-[#3C3C3C] font-inter">Common questions about AI strategy</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#E6E6E6] rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 font-montserrat">{faq.question}</h3>
                <p className="text-[#3C3C3C] font-inter">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
